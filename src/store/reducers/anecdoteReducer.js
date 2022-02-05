import initial from "../initialState";

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = initial.anecdotes.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INCREASE_VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state
          .map(anecdote =>
          anecdote.id !== id ? anecdote : changedAnecdote
          )
          .sort((a, b) => b.votes - a.votes)
    }
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      votes: 0,
      id: getId()
    }
  }
}

export const increaseVote = (id) => {
  return {
    type: 'INCREASE_VOTE',
    data: { id }
  }
}

export default anecdoteReducer