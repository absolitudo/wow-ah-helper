import React from 'react'

/* Components */
import GetAuctionData from './getAuctionData'

const Header = (props) => (
    <header>
        <GetAuctionData disableAuctionSubmit={props.disableAuctionSubmit}/>
    </header>
)

export default Header