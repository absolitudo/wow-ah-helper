import React from 'react'
import PriceChart from './priceChart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Components */
import ItemInfo from './itemInfo'

/* Action creators */
import { changeReagentCustomPrice } from '../redux/actions'

const Reagent = (props) => (
    <div className='reagent-container'>
        <ItemInfo item={props.reagent} tooltip={true} />
        {props.reagent.prices && (
            <p className='price-container'>
                Price: 
                <input type="number" value={props.reagent.prices.customPrice} onChange={(event) => props.changeReagentCustomPrice({itemName: props.itemName, reagentName: props.reagent.name, value: event.target.value})}/>
                <span className='moneygold'></span>
            </p>
        )}
        {(props.reagent.chartData && props.reagent.prices) ? (
            props.reagent.chartData[0] 
            ? <PriceChart data={props.reagent.chartData} amount={props.reagent.prices.amount} />
            : <p className='no-data'>No data!</p>
        ) : (
            props.reagent.prices && <p className='no-data'>No data!</p>
        )}
        <hr/>
    </div>
)

const mapDispatchToprops = (dispatch) => bindActionCreators({ changeReagentCustomPrice }, dispatch)

export default connect(null, mapDispatchToprops)(Reagent)