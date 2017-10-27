import React from 'react'
import { connect } from 'react-redux'

/* Components */
import InfoCircle from './infoCircle'
import GetAuctionData from './getAuctionData'
import ProfessionState from './professionState'
import AuctionState from './auctionState'


const Header = (props) => (
    <header>
        <div className='form-wrapper'>
            <GetAuctionData />
            <InfoCircle/>
        </div>

        <div className='state-wrapper'>
            <ProfessionState
                state={props.professionsData}
            />

            <AuctionState
                state={props.auctionData}
                loading={props.auctionDataProcessing}
            />

        </div>
    </header>
)

const mapStateToProps = (state) => state.appState

export default connect(mapStateToProps)(Header)