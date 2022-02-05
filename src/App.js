import React, {useEffect} from 'react'
import AnecdotesList from "./components/AnecdotesList";
import AnecdotesForm from "./components/AnecdotesForm";
import Notification from "./components/Notification";
import {useDispatch} from "react-redux";
import {initializeAnecdotes} from "./store/reducers/anecdoteReducer";
import {initializeNotifications} from "./store/reducers/notificationReducer";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
        dispatch(initializeNotifications())
    }, [dispatch]);

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