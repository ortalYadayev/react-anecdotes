import React from "react";
import {connect} from "react-redux";
import {createAnecdote} from "../store/reducers/anecdoteReducer";
import {createNotification} from "../store/reducers/notificationReducer";

const AnecdotesForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        props.createAnecdote(content)
        props.createNotification(`You added to "${content}"`, 10)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote" />
                </div>
                <button type="submit">create</button>
            </form>
    </div>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    createNotification
}

export default connect(
    null,
    mapDispatchToProps
)(AnecdotesForm)