import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'
import Moreinfo from './moreInfo'
import Notification from './notification'

const App = (props) => (
    <div /*className={props.displayMoreinfo ? 'no-scroll-background' : ''}*/>
        {console.log('app rendering')}
        {props.displayMoreinfo && <Moreinfo />}
        {props.notifications.length > 0 && (
            <div className="notification-container">
                {props.notifications.map((notification, index) => (
                    <Notification notification={notification} key={index} />
                ))}
            </div>
        )}
        <Landing />
        <MainContent />

    </div>
)

const mapStateToProps = (state) => ({
    displayMoreinfo: state.displayMoreinfo,
    notifications: state.notifications
})

export default connect(mapStateToProps)(App)