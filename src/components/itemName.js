import React from 'react'

/* Components */
import SellPrice from './sellPrice'

const ItemName = (props) => (
    <div className='item-info'>
        <div className='item-name'>
            <img src={'https://my-wow-api.herokuapp.com/icon?name=' + props.item.iconName + '.png'}
                alt='Icon of the item'
            />
            <h2>
                <a href={'http://mop-shoot.tauri.hu/?item=' + props.item.id}
                    rel='noreferrer noopener'
                    target='_blank'
                    className={'item-quality-' + props.item.quality}
                >
                    {props.item.name}
                </a>
            </h2>
        </div>
        <div className={!props.tooltip ? 'item-content' : 'item-content tooltip' } >
            {props.item.tooltip.castTime && <p>Cast Time: {props.item.tooltip.castTime}</p>}
            {props.item.tooltip.itemLevel && <p className='item-level'>Item Level {props.item.tooltip.itemLevel}</p>}
            {props.item.tooltip.description.map((description, index) => (
                !/(Blue|Yellow|Meta|Cogwheel|Red) Socket/g.test(description)
                    ? <p key={index} dangerouslySetInnerHTML={{__html: description}}></p>
                    : <ColoredSocket key={index} description={description} />
            ))}
            {props.item.tooltip.requiredLevel && <p>Requires Level {props.item.tooltip.requiredLevel}</p>}
            {props.item.tooltip.vendorSellPrice && <p>Sell Price: <SellPrice price={props.item.tooltip.vendorSellPrice}/></p>}
        </div>
    </div>
)

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
export default ItemName