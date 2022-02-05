import React from 'react'
import AnecdotesList from "./components/AnecdotesList";
import AnecdotesForm from "./components/AnecdotesForm";
import Notification from "./components/Notification";
import {useDispatch, useSelector} from "react-redux";

const App = () => {

    const dispatch = useDispatch()
    const notifications = useSelector(state => state.notifications)
    console.log(notifications)

    return (
        <div>
          <h2>Anecdotes</h2>
            <Notification />
            <AnecdotesList />
            <AnecdotesForm />
        </div>
    )
}

export default App