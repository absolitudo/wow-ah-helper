import React from 'react'
import PriceChart from './priceChart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Components */
import ItemInfo from './itemInfo'

/* Action creators */
import { changeReagentCustomPrice } from '../redux/actions'

const Reagent = (props) => (
    <div>
        <ItemInfo item={props.reagent} tooltip={true} />
        {(props.reagent.chartData !== false && props.reagent.prices) && (
            <PriceChart data={props.reagent.chartData} amount={props.reagent.prices.amount} />
        )}
        {props.reagent.prices && (
            <p>
                Reagent price: 
                <input type="number" value={props.reagent.prices.customPrice} onChange={(event) => props.changeReagentCustomPrice({itemName: props.itemName, reagentName: props.reagent.name, value: event.target.value})}/>
            </p>
        )}
    </div>
)

const mapDispatchToprops = (dispatch) => bindActionCreators({ changeReagentCustomPrice }, dispatch)

export default connect(null, mapDispatchToprops)(Reagent)