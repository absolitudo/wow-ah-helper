import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { removeNotification } from '../redux/actions'

const Notification = (props) => (
    <div 
        className={'notification-' + props.notification.type + ' notification'}
        onClick={() => props.removeNotification(props.notification)}
    >
        {props.notification.message}
    </div>
)

const mapDispatchToprops = (dispatch) => bindActionCreators({
    removeNotification
}, dispatch)

export default connect(null, mapDispatchToprops)(Notification)