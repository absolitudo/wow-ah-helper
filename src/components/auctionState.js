import React from 'react'



const AuctionState = (props) => {
    let spanStyle = {
        backgroundColor: props.state ? '#4caf50' : '#f44336'
    }

    return (
        <p>
            Auction state:
                <span
                    style={spanStyle}
                    className={props.loading && 'auction-loading'}>
                </span>
        </p>
    )
}

export default AuctionState