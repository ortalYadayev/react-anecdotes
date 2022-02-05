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

export const createAnecdote = (data) => {
  console.log(data)
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes,
  };
};

export const increaseVote = (id) => {
  return {
    type: 'INCREASE_VOTE',
    data: { id }
  }
}

export default anecdoteReducer