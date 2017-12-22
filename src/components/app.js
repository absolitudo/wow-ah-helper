import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'
import Moreinfo from './moreInfo'

const App = (props) => (
    <div /*className={props.displayMoreinfo ? 'no-scroll-background' : ''}*/>
        {console.log('app rendering')}
        {props.displayMoreinfo && <Moreinfo />}
        <Landing />
        <MainContent />
    </div>
)

const mapStateToProps = (state) => ({
    displayMoreinfo: state.displayMoreinfo
})

export default connect(mapStateToProps)(App)