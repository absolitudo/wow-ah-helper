import React from 'react'
import { connect } from 'react-redux'

/* Components */
import GetAuctionData from './getAuctionData'

const Header = (props) => (
    <header>
        <GetAuctionData disableAuctionSubmit={props.professionsData ? true : false}/>
    </header>
)

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Header)