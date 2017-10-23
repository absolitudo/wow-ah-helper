import React from 'react'
import { connect } from 'react-redux'

/* Components */
import GetAuctionData from './getAuctionData'

const Header = (props) => (
    <header>
        {console.log(props.professionsData)}
        <GetAuctionData disableAuctionSubmit={props.appState.professionsData ? false : true}/>
    </header>
)

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Header)