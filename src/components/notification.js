import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import {
    removeNotification
} from '../redux/actions'

const Notification = (props) => {
    
    setTimeout(() => {
        props.removeNotification(props.notification)
    }, 3000)

    let notificationStyles = {
        backgroundColor: props.notification.type === 'Error' ? '#f44336' : '#2196f3'
    }
    
    return (
        <div
            className='notification'
            style={notificationStyles}
            onClick={() => props.removeNotification(props.notification)}
        >
            <h3>{props.notification.type}</h3>
            <p>{props.notification.message}</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeNotification
}, dispatch)

export default connect(null, mapDispatchToProps)(Notification)