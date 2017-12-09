import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Components */
import PriceChart from './priceChart'
import Reagent from './reagent'
import ItemName from './itemName'
import SellPrice from './sellPrice'

/* Action creators */
import { changeCalculation } from '../redux/actions'

const Item = (props) => (
    <div className='item'>
        <div className='item-left'>
            <div className="item-left-upper">
                <ItemName item={props.item} />
            </div>
            <div className="item-left-lower">
                
                {(props.item.chartData !== false && props.item.prices) && (
                    <div>
                        <PriceChart data={props.item.chartData} amount={props.item.prices.amount}/>
                        <button onClick={() => props.changeCalculation({itemName: props.item.name, calculateBy: 'minBuyout', calculationPrice: props.item.prices.minBuyout})}>Minimum buyout</button>
                        <button onClick={() => props.changeCalculation({itemName: props.item.name, calculateBy: 'avgBuyout', calculationPrice: props.item.prices.avgBuyout})}>Average buyout</button>
                        <button onClick={() => props.changeCalculation({itemName: props.item.name, calculateBy: 'medianBuyout', calculationPrice: props.item.prices.medianBuyout})}>Median buyout</button>
                        <p>
                            Recipe Price: <input type="number" value={props.item.prices.calculationPrice} onChange={(event) => props.changeCalculation({itemName: props.item.name, calculateBy: 'custom', calculationPrice: event.target.value})}/>
                        </p>
                        <p>Expected profit: <SellPrice price={props.item.profit}/></p>
                    </div>
                )}


            </div>
        </div>
        <div className='item-right'>
            {props.item.reagents.map((reagent, index) => <Reagent key={index} reagent={reagent} itemName={props.item.name} />)}
        </div>
    </div>
)


const mapDispatchToProps = (dispatch) => bindActionCreators({ changeCalculation }, dispatch)

export default connect(null, mapDispatchToProps)(Item)