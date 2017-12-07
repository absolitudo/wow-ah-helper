import React from 'react'

/* Components */
import PriceChart from './priceChart'
const Item = (props) => (
    <div className='item'>
        <div className='item-left'>
            <div className="item-left-upper">
                <div className="item-header">
                    <img src={'https://my-wow-api.herokuapp.com/icon?name=' + props.item.iconName + '.png'}
                        alt='Icon of the item'
                        />
                    <h2>
                        <a href={'http://mop-shoot.tauri.hu/?item=' + props.item.id}
                            rel='noreferrer noopener'
                            target='_blank'
                            className={'item-quality-' + props.item.quality}
                            >
                            {props.item.itemName}
                        </a>
                    </h2>

                </div>
                <div className="item-content">
                    {props.item.tooltip.castTime && <p>Cast Time: {props.item.tooltip.castTime}</p>}
                    {props.item.tooltip.itemLevel && <p className='item-level'>Item Level {props.item.tooltip.itemLevel}</p>}
                    {props.item.tooltip.description.map((description, index) => (
                        !/(Blue|Yellow|Meta|Cogwheel|Red) Socket/g.test(description) ? <p key={index} dangerouslySetInnerHTML={{__html: description}}></p> : <ColoredSocket key={index} description={description} />
                    ))}
                    {props.item.tooltip.requiredLevel && <p>Requires Level {props.item.tooltip.requiredLevel}</p>}
                    {props.item.tooltip.vendorSellPrice && <p>Sell Price: <SellPrice price={props.item.tooltip.vendorSellPrice}/></p>}
                </div>
            </div>
            <div className="item-left-lower">
                
                {(props.item.chartData !== false && props.item.prices) && <PriceChart data={props.item.chartData} amount={props.item.prices.amount}/> }
                
                {props.item.prices && <p>display the profit</p>}
            </div>
        </div>

        <div className='item-right'>
            item reagents
        </div>
    </div>
)

const SellPrice = (props) => {
    let gold = Math.floor(props.price)
    let price = props.price.toFixed(4).toString()
    let silver = +price.slice(price.length - 4, price.length - 2)
    let copper = +price.slice(price.length -2, price.length)
    
    return (
        <span>
            {gold > 0 && <span className='moneygold'>{gold}</span>}
            {silver > 0 && <span className='moneysilver'>{silver}</span>}
            {copper > 0 && <span className='moneycopper'>{copper}</span>}
        </span>
    )
}

const ColoredSocket = (props) => {
    let color = props.description.replace(/ Socket/, '')
    let socketClass
    switch(color) {
        case 'Cogwheel':
            socketClass = 'socket-cogwheel'
            break
        case 'Blue':
            socketClass = 'socket-blue'
            break
        case 'Yellow':
            socketClass = 'socket-yellow'
            break
        case 'Red':
            socketClass = 'socket-red'
            break
        case 'Meta':
            socketClass = 'socket-meta'
            break
    } 
    return (
        <p><span className={socketClass}>{props.description}</span></p>
    )
}

export default Item