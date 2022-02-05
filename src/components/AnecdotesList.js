import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { increaseVote} from "../store/reducers/anecdoteReducer";
import { createNotification } from "../store/reducers/notificationReducer";

const AnecdotesList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const vote = async (id) => {
        dispatch(increaseVote(id))
        dispatch(createNotification(`You voted to "${anecdotes.find((anecdote) => anecdote.id === id).content}"`, 5))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdotesList