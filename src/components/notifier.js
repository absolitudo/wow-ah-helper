import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import {
    showNotification,
    removeNotification
} from '../redux/actions'

const Notifier = (props) => (
    <div className='notifier'>
        
    </div>
)

const mapStateToProps = state => ({
    notifications: state.notifications
})

const mapDispatchToProps = dispatch => bindActionCreators({
    showNotification,
    removeNotification
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Notifier)