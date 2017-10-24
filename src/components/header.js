import React from 'react'
import { connect } from 'react-redux'

/* Components */
import GetAuctionData from './getAuctionData'

const Header = (props) => (
    <header>
        <GetAuctionData />
    </header>
)

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Header)