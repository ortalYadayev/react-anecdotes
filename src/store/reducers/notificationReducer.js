import notificationService from "../../services/notifications";

const notificationReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      return [...state, action.data.notification];
    case 'REMOVE':
      return state.filter((notification) => notification.id !== action.data.id)
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
    setTimeout(() => {
      dispatch(removeNotification(newNotification.id));
    },time * 1000);
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