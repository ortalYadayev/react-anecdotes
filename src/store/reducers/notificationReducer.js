import notificationService from "../../services/notifications";
import store from "../index";

const notificationReducer =  (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      state = [...state, action.data.notification];
      console.log(state)
      setTimeout(() => {
        store.dispatch(removeNotification(action.data.notification.id));
      }, action.data.time*1000);

      return state;

    case 'REMOVE': {
      return state.filter((notification) => notification.id !== action.data.id)
    }
    case 'INIT_NOTIFICATIONS':
      return action.data;
    default:
      return state
  }
}

export const createNotification = (message, time) => {
  return async dispatch => {
    const newNotification = await notificationService.createNewNotification(message)
    dispatch({
      type: 'NEW_NOTIFICATION',
      data: {
        notification: newNotification,
        time
      }
    })
  }
}

export const initializeNotifications = () => {
  return async dispatch => {
    const notifications = await notificationService.getAll()
    dispatch({
      type: "INIT_NOTIFICATIONS",
      data: notifications,
    })
  };
};

export const removeNotification = (id) => {
  return async dispatch => {
    await notificationService.removeNotification(id)
    dispatch({
      type: 'REMOVE',
      data: {
        id,
      }
    })
  };
}

export default notificationReducer