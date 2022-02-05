import React from "react";
import {createAnecdote} from "../store/reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import {createNotification, toggleVisibleOf} from "../store/reducers/notificationReducer";

const AnecdotesForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(createNotification(`You added to "${content}"`))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote" />
                </div>
                <button>create</button>
            </form>
    </div>
    )
}

export default AnecdotesForm