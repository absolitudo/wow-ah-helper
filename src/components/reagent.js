import React from 'react'
import PriceChart from './priceChart'

/* Components */
import ItemInfo from './itemInfo'

const Reagent = (props) => (
    <div>
        <ItemInfo item={props.reagent} tooltip={true} />
        {(props.reagent.chartData !== false && props.reagent.prices) && (
            <div>
                <PriceChart data={props.reagent.chartData} amount={props.reagent.prices.amount} />
            </div>
        )}
    </div>
)

export default Reagent