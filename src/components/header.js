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

const mapStateToProps = (state) => {
    return {
        auctionData: state.auctionData ? true : false,
        professionsData: state.professionsData ? true : false,
        auctionDataProcessing: state.auctionDataProcessing
    }
}

export default connect(mapStateToProps)(Header)