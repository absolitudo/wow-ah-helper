import React from 'react'
import PriceChart from './priceChart'

/* Components */
import ItemInfo from './itemInfo'

const Reagent = (props) => (
    <div>
        <ItemInfo item={props.reagent} tooltip={true} />
        {(props.reagent.chartData !== false && props.reagent.prices) && (
            <PriceChart data={props.reagent.chartData} amount={props.reagent.prices.amount} />
        )}
        {props.reagent.prices && (
            <p>
                Reagent price: 
                <input type="number" value={props.reagent.prices.calculationPrice} />
            </p>
        )}
    </div>
)

export default Reagent