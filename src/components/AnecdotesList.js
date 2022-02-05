import React from "react";
import {connect} from "react-redux";
import {increaseVote} from "../store/reducers/anecdoteReducer";
import { createNotification } from "../store/reducers/notificationReducer";

const AnecdotesList = (props) => {

    const vote = async (id) => {
        props.increaseVote(id)
        props.createNotification(
            `You voted to "${props.anecdotes.find((anecdote) => anecdote.id === id).content}"`,
            5)

    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    increaseVote,
    createNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdotesList)