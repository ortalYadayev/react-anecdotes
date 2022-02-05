import initial from "../initialState";
import store from "../index";

const initialState = initial.notifications;

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      const newNotification = {
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
        message: action.data.message,
      };

      state = [...state, newNotification];

      setTimeout(() => {
        store.dispatch(removeNotification(newNotification.id));
      }, 5000);

      return state;

    case 'REMOVE': {
      return state.filter((notification) => notification.id !== action.data.id)
    }

    default:
      return state
  }
}

export const createNotification = (message) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: {
      message,
    }
  }
}

export const removeNotification = (id) => {
  return {
    type: 'REMOVE',
    data: {
      id,
    }
  }
}

export default notificationReducer