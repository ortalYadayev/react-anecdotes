import React, {useEffect} from 'react'
import AnecdotesList from "./components/AnecdotesList";
import AnecdotesForm from "./components/AnecdotesForm";
import Notification from "./components/Notification";
import {useDispatch} from "react-redux";
import {initializeAnecdotes} from "./store/reducers/anecdoteReducer";
import anecdotesService from './services/anecdotes';

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        anecdotesService
            .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)));
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