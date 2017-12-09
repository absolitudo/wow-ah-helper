import React from 'react'
import PriceChart from './priceChart'

const Reagent = (props) => (
    <div>
        <div className="item-header">
            <img src={'https://my-wow-api.herokuapp.com/icon?name=' + props.reagent.iconName + '.png'}
                alt='Icon of the item'
            />
            <h2>
                <a href={'http://mop-shoot.tauri.hu/?item=' + props.reagent.id}
                    rel='noreferrer noopener'
                    target='_blank'
                    className={'item-quality-' + props.reagent.quality}
                >
                    {props.reagent.name}
                </a>
            </h2>
        </div>
        {(props.reagent.chartData !== false && props.reagent.prices) && (
            <div>
                <PriceChart data={props.reagent.chartData} amount={props.reagent.prices.amount} />
            </div>
        )}
    </div>
)

export default Reagent