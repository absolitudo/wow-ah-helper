import React from 'react'

const SellPrice = (props) => {
    let gold = Math.floor(props.price)
    let price = props.price.toFixed(4).toString()
    let silver = +price.slice(price.length - 4, price.length - 2)
    let copper = +price.slice(price.length -2, price.length)
    
    return (
        <span>
            {gold !== 0 && <span className='moneygold'>{gold}</span>}
            {silver !== 0 && <span className='moneysilver'>{silver}</span>}
            {copper !== 0 && <span className='moneycopper'>{copper}</span>}
        </span>
    )
}

export default SellPrice