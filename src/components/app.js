import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'
import MoreInfo from './moreInfo'

const App = (props) => (
    <div style={{overflow: props.displayMoreInfo ? 'hidden' : '', height: '100vh'}}>
        {console.log('app rendering')}
        {props.displayMoreInfo && <MoreInfo />}
        <Landing />
        <MainContent />
    </div>
)

const mapStateToProps = (state) => ({
    displayMoreInfo: state.displayMoreInfo
})

export default connect(mapStateToProps)(App)