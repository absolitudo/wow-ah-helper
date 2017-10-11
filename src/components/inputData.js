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
    const reader = new FileReader()
    event.preventDefault()
    
    if(event.target.data.value.includes('Auc-ScanData') && event.target.data.value.includes('.lua')) {
        reader.readAsText(event.target.data.files[0])

    } else {
        // make better error handling
        alert('Error: invalid file.')
    }
    
    
    
    reader.addEventListener('load', (event) => inputData(event.target.result))
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ inputData }, dispatch)

export default connect(null, mapDispatchToProps)(InputData)