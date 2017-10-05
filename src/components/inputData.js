import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import { inputData } from './../redux/actions'

const InputData = (props) => (
    <form onSubmit={(event) => handleSubmit(event, props.inputData)}>
        <input type="file" name='data'/>
        <button type='submit'>Submit</button>
    </form>
)

const handleSubmit = (event, inputData) => {
    event.preventDefault()
    console.log(event.target.data.files[0])
    //use filereader
    inputData('submitted')
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ inputData }, dispatch)

export default connect(null, mapDispatchToProps)(InputData)