const notificationReducer = (state = "render here notification...", action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      return [...state, action.data]
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: {
      content,
    }
  }
}

export default notificationReducer