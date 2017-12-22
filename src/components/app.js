import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'
import MoreInfo from './moreInfo'

let noScrollStyles = {
    overflow: 'hidden',
    height: '100vh'
}

const App = (props) => (
    <div style={props.displayMoreinfo ? noScrollStyles : {}}>
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