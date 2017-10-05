import React from 'react'
import { connect } from 'react-redux'

/* Components */
import InputData from './inputData'
import DisplayData from './displayData'


const App = (props) => (
    <div>
        <InputData/>
        {props.data && <DisplayData data={props.data}/>}
    </div>
)

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(App)