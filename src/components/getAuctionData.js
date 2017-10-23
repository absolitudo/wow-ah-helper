import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Actions */
import { loadAuctionData, changeAuctionDataFileName } from './../redux/actions'

const GetAuctionData = (props) => (
    <form onSubmit={(event) => handleSubmit(event, props.loadAuctionData)} className='get-auction-data'>
        <label htmlFor="input-file">
            {props.appState.auctionDataFileName || 'Select auction data'}
        </label>
        <input id='input-file' type="file" name='data' onChange={(event) => handleFileChange(event, props.changeAuctionDataFileName)}/>
        <input type='submit' disabled={!(props.appState.professionsData && props.appState.auctionDataFileName !== null)}/>
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

const handleFileChange = (event, changeAuctionDataFileName) => changeAuctionDataFileName(event.target.files[0].name)

const mapDispatchToProps = (dispatch) => bindActionCreators({ loadAuctionData, changeAuctionDataFileName }, dispatch)

const mapStateToProps = (state) => state

export default connect(mapStateToProps, mapDispatchToProps)(GetAuctionData)