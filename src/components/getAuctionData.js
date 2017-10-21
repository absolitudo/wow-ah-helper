import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import { loadAuctionData } from './../redux/actions'

const GetAuctionData = (props) => (
    <form onSubmit={(event) => handleSubmit(event, props.loadAuctionData)} className='get-auction-data'>
        <label htmlFor="input-file">
            Select auction data
        </label>
        <input id='input-file' type="file" name='data'/>
        <input type='submit' disabled={props.disableAuctionSubmit}/>
    </form>
)

const handleSubmit = (event, loadAuctionData) => {
    const reader = new FileReader()
    event.preventDefault()
    
    if(event.target.data.value.includes('Auc-ScanData') && event.target.data.value.includes('.lua')) {
        reader.readAsText(event.target.data.files[0])

    } else {
        // make better error handling
        alert('Error: invalid file.')

    }

    reader.addEventListener('load', (event) => loadAuctionData(event.target.result))
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ loadAuctionData }, dispatch)

export default connect(null, mapDispatchToProps)(GetAuctionData)