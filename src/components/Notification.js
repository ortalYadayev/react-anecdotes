import React from 'react'
import {useSelector} from "react-redux";

const Notification = () => {
    const notifications = useSelector(state => state.notifications);
    // const dispatch = useDispatch()

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return !!notifications.length && (
        <div style={style}>
            {notifications.map(notification =>
                <div key={notification.id}>
                    {notification.message}
                </div>
            )}
        </div>
    );
}

export default Notification;