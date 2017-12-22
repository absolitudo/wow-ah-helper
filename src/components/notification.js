import React from 'react'

const Notification = (props) => (
    <div className={'notification-' + props.notification.type}>{props.notification.message}</div>
)

export default Notification