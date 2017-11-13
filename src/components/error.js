import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showNotification } from '../redux/actions'

const Error = (props) => (
    <button onClick={() => props.showNotification({
        type: 'Notification',
        message: 'New long error message for testing out some stuff , an even long error message'
    })}>Generate error message</button>
)

const mapDispatchToProps = dispatch => bindActionCreators({ showNotification }, dispatch)

export default connect(null, mapDispatchToProps)(Error)