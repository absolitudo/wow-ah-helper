import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Notification from './notification'

const Notifier = (props) => (
    <div className='notifier'>
        
        {props.notifications.map((notification, index) => (
            <Notification
                key={index}
                notification={notification}
            />
        ))}
    </div>
)

const mapStateToProps = state => ({
    notifications: state.notifications
})

export default connect(mapStateToProps)(Notifier)