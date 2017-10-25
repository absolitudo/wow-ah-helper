import React from 'react'
import { connect } from 'react-redux'

/* Components */
import InfoCircle from './infoCircle'
import GetAuctionData from './getAuctionData'

const Header = (props) => (
    <header>
        <GetAuctionData />
        <InfoCircle/>
    </header>
    
)

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Header)