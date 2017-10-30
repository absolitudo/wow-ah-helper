import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/* Components */
import UploadIcon from './uploadIcon'

/* Actions */
import { loadAuctionData, changeAuctionDataFileName, auctionDataProcessing } from './../redux/actions'

const GetAuctionData = (props) => (
    <form onSubmit={(event) => handleSubmit(event, props.loadAuctionData, props.auctionDataProcessing)} className='get-auction-data'>
        {console.log('getAuctionData.js rendering')}
        <label htmlFor="input-file">
            <UploadIcon />
            {props.auctionDataFileName || 'Select auction data'}
        </label>
        
        <input
            id='input-file'
            type="file"
            name='data'
            onChange={(event) => handleFileChange(event, props.changeAuctionDataFileName)}
        />

        <input
            type='submit'
            value='Submit'
            disabled={!(props.professionsData && props.auctionDataFileName !== null && props.auctionDataProcessing)}
        />
    </form>
)

const handleSubmit = (event, loadAuctionData, auctionDataProcessing) => {
    const reader = new FileReader()
    event.preventDefault()
    
    if(event.target.data.value.includes('Auc-ScanData') && event.target.data.value.includes('.lua')) {
        reader.readAsText(event.target.data.files[0])

    } else {
        // make better error handling
        alert('Error: invalid file.')

    }

    reader.addEventListener('load', (event) => {
        new Promise((resolve, reject) => {
            resolve(auctionDataProcessing(true))
        }).then(() => loadAuctionData(event.target.result))
        
    })
}

const handleFileChange = (event, changeAuctionDataFileName) => changeAuctionDataFileName(event.target.files[0] ? event.target.files[0].name : null)

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadAuctionData,
    changeAuctionDataFileName,
    auctionDataProcessing
}, dispatch)

const mapStateToProps = (state) => {
    return {
        auctionDataFileName: state.auctionDataFileName,
        professionsData: state.professionsData ? true : false,
        auctionDataProcessing: state.auctionDataProcessing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAuctionData)