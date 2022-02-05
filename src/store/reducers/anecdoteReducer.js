import anecdotesService from "../../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case "INIT_ANECDOTES":
      return action.data;
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

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNewAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    })
  };
};

export const increaseVote = (id) => {
  return {
    type: 'INCREASE_VOTE',
    data: { id }
  }
}

export default anecdoteReducer