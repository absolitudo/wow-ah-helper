import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import {
    getDataFileName,
    loadAuctionData,
    getProfessionData,
    setMoreinfoDisplay
} from './../redux/actions'

const Landing = (props) => {
        
    /* MAKE API REQUEST TO GET PROFESSION DATA */
    fetch('https://my-wow-api.herokuapp.com/professions/all')
        .then(res => res.json())
        .then(res => props.getProfessionData(res))

    return (
        <header className='landing'>
            {console.log('landing rendering')}
            <div className="landing-background">
                <div className="landing-container">
                    <h2>What to craft</h2>
                    <ul>
                        <li>Use the <a href="https://wow.curseforge.com/projects/auctioneer/files" target='_blank' rel='noopener noreferrer'>Auctioneer</a> addon to scan the auction house for data.</li>
                        <li>Provide your data for this aplication to help you decide which items are profitable to craft.</li>
                    </ul>
                    <span id="more-info" onClick={() => props.setMoreinfoDisplay(true)}>More info</span>
                    <div className="url-code">
                        <p>Data is stored at:</p>
                        <code><span className="highlight">YOURWOWCLIENT</span>/WTF/Account/<span className="highlight">YOURACCOUNTNAME</span>/SavedVariables/Auc-ScanData.lua</code>
                    </div>
                    <form onSubmit={(event) => handleSubmit(props, event)}>
                        <label htmlFor="file-input">
                            <p>
                                {props.dataFileName ? props.dataFileName : 'Select Data'}
                            </p>
                        </label>
        
                        <input
                            type="file"
                            id='file-input'
                            onChange={(event) => handleFileChange(event, props.getDataFileName)}
                        />
                        <button type='submit' disabled={!props.professionData} className={!props.professionData ? 'disabled-submit' : ''}>Provide Data</button>
                    </form>
                </div>
            </div>
        </header>
    )
}

const handleSubmit = (props, event) => {
    event.preventDefault()
    
    const reader = new FileReader()
    if(event.target['file-input'].value.includes('Auc-ScanData') && event.target['file-input'].value.includes('.lua')) {
        reader.readAsText(event.target['file-input'].files[0])
    } else {
        alert('errur')
        /*
        props.showNotification({
            type: 'Error',
            message: 'Invalid file.'
        })
        */
    }

    reader.addEventListener('load', (event) => {
        new Promise((resolve, reject) => {
            resolve(props.loadAuctionData(event.target.result))
        })/*
            .then(() => props.showNotification({
                type: 'Notification',
                message: 'Auction data loaded.'
            }))
            */
    })
    
}

const handleFileChange = (event, getDataFileName) => getDataFileName(event.target.files[0] ? event.target.files[0].name : 'Select Data')

const mapStateToProps = (state) => ({
    dataFileName: state.dataFileName,
    professionData: state.professionData ? true : false
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDataFileName,
    loadAuctionData,
    getProfessionData,
    setMoreinfoDisplay
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Landing)