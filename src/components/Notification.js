import React from 'react'
import {connect} from "react-redux";

const Notification = (props) => {
    // const notifications = useSelector(state => state.notifications);

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return !!props.notifications.length && (
        <div style={style}>
            {props.notifications.map(notification =>
                <div key={notification.id}>
                    {notification.message}
                </div>
            )}
        </div>
    );
}

//export default Notification;


const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
}

const ConnectedNotes = connect(
    mapStateToProps
)(Notification)

export default ConnectedNotes