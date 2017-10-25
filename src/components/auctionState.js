import React from 'react'



const AuctionState = (props) =>{
    let spanStyle = {
        backgroundColor: props.state ? 'green' : 'red'
    }

    return (
        <p>Auction state: <span style={spanStyle}></span></p>
    )
}

export default AuctionState