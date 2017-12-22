import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'
import MoreInfo from './moreInfo'

const App = (props) => (
    <div className={props.displayMoreinfo ? 'no-scroll-background' : ''}>
        {console.log('app rendering')}
        {props.displayMoreinfo && <MoreInfo />}
        <Landing />
        <MainContent />
    </div>
)

const mapStateToProps = (state) => ({
    displayMoreinfo: state.displayMoreinfo
})

export default connect(mapStateToProps)(App)