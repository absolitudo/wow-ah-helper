import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Components */
import PriceChart from './priceChart'
import Reagent from './reagent'
import ItemInfo from './itemInfo'
import SellPrice from './sellPrice'

/* Action creators */
import { changeCalculateBy } from '../redux/actions'

const Item = (props) => (
    <div className='item'>
        <div className='item-left'>
            <div className="item-left-upper">
                <ItemInfo item={props.item} />
            </div>
            <div className="item-left-lower">
                
                {(props.item.chartData !== false && props.item.prices) && (
                    <div>
                        <PriceChart data={props.item.chartData} amount={props.item.prices.amount}/>
                        <button onClick={() => props.changeCalculateBy({itemName: props.item.name, calculateBy: 'minBuyout'})}>Minimum buyout</button>
                        <button onClick={() => props.changeCalculateBy({itemName: props.item.name, calculateBy: 'avgBuyout'})}>Average buyout</button>
                        <button onClick={() => props.changeCalculateBy({itemName: props.item.name, calculateBy: 'medianBuyout'})}>Median buyout</button>
                        <p>
                            Recipe Price: <input type="number" value={props.item.prices.customPrice} onChange={(event) => props.changeCalculation({itemName: props.item.name, calculateBy: 'custom', value: event.target.value})}/>
                        </p>
                        <p>Expected profit: <SellPrice price={calculateProfit(100)}/></p>
                    </div>
                )}


            </div>
        </div>
        <div className='item-right'>
            {props.item.reagents.map((reagent, index) => <Reagent key={index} reagent={reagent} itemName={props.item.name} />)}
        </div>
    </div>
)

const calculateProfit = (someshit) => {
    let profit = someshit
    return profit
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeCalculateBy }, dispatch)

export default connect(null, mapDispatchToProps)(Item)