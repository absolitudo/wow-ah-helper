import React from 'react'

const Notification = (props) => (
    <div className={'notification-' + props.notification.type + ' notification'}>{props.notification.message}</div>
)

export default Notification