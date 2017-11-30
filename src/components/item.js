import React from 'react'

const Item = (props) => (
    <div className='item'>
        <div className='item-left'>
            <div className="item-left-upper">
                item name
                item description
            </div>
            <div className="item-left-lower">
                item price shits
            </div>
        </div>

        <div className='item-right'>
            item reagents
        </div>
    </div>
)

export default Item