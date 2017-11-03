import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { toggleShowInfoModal } from '../redux/actions'

/* Components */
import UploadIcon from './uploadIcon'

const InfoModal = (props) => (
    <div className='info-modal-container' onClick={props.toggleShowInfoModal}>
        {console.log('infoModal.js rendering')}
        <section className='info-modal' onClick={handleModalClick}>
            <button onClick={props.toggleShowInfoModal}>X</button>
            <h4>
                This web app calculates which recipes in World of Warcraft makes profit by buying the ingredients from the auction house.
            </h4>
            <p>
                It uses the data of <a href="https://wow.curseforge.com/projects/auctioneer/files" target='_blank' rel="noopener noreferrer">Auctioneer</a> addon.
                You have to scan the auction house with the addon to extract data with it. You can use this data to calculate which recipes are worth crafting.
                The auction data is called "Auc-ScanData.lua" and it can be found at 
                <code>
                    "<span className='hightlight-span'>{'{YOURWOWCLIENT}'}</span>/WTF/Account/<span className='hightlight-span'>{'{YOURACCOUNTNAME}'}</span>/SavedVariables/Auc-ScanData.lua".
                </code>
            </p>

            <div className='get-auction-preview'>
                <button className='upload'>
                    <UploadIcon />
                    Select auction data
                </button>
                <button className='submit'>
                    Submit
                </button>
            </div>



        </section>
    </div>
)

const handleModalClick = (event) => {
    event.stopPropagation()
    return false
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ toggleShowInfoModal }, dispatch)

export default connect(null, mapDispatchToProps)(InfoModal)