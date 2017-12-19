import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Components */
import PriceChart from './priceChart'
import Reagent from './reagent'
import ItemInfo from './itemInfo'
import SellPrice from './sellPrice'

/* Action creators */
import {
    changeCalculateBy,
    changeRecipeCustomPrice
} from '../redux/actions'

const Item = (props) => (
    <div className='item'>
        <div className='item-left'>
            <div className="item-left-upper">
                <ItemInfo item={props.item} />
            </div>
            <div className="item-left-lower">
                
                {(props.item.chartData && props.item.prices) && (
                    <div>
                        <div className='price-button-container'>
                            <CalculateByButton
                                itemName={props.item.name}
                                buttonType='minBuyout'
                                buttonText='Minimum'
                                changeCalculateBy={props.changeCalculateBy}
                                calculateBy={props.item.calculateBy}
                            />
                            <CalculateByButton
                                itemName={props.item.name}
                                buttonType='avgBuyout'
                                buttonText='Average'
                                changeCalculateBy={props.changeCalculateBy}
                                calculateBy={props.item.calculateBy}
                                
                            />
                            <CalculateByButton
                                itemName={props.item.name}
                                buttonType='medianBuyout'
                                buttonText='Median'
                                changeCalculateBy={props.changeCalculateBy}
                                calculateBy={props.item.calculateBy}
                                
                            />
                        </div>
                        <p>
                            Recipe Price: <input type="number" value={props.item.prices.customPrice} onChange={(event) => props.changeRecipeCustomPrice({itemName: props.item.name, value: event.target.value})}/>
                        </p>
                        <p>Expected profit: <SellPrice price={calculateProfit(props.item)}/></p>
                        {props.item.chartData[0] && <PriceChart data={props.item.chartData} amount={props.item.prices.amount}/>}
                    </div>
                )}


            </div>
        </div>
        <div className='item-right'>
            {props.item.reagents.map((reagent, index) => <Reagent key={index} reagent={reagent} itemName={props.item.name} />)}
        </div>
    </div>
)

const CalculateByButton = (props) => (
    <button className={(props.calculateBy === props.buttonType) ? 'selected-calculation' : ''} onClick={() => props.changeCalculateBy({itemName: props.itemName, calculateBy: props.buttonType})}>
        {props.buttonText}
    </button>
)

const calculateProfit = (item) => {
    let profit

    profit = item.prices.customPrice - item.reagents.reduce((acc, reagent) => acc + (reagent.prices.customPrice * reagent.quantity), 0)

    return profit
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeCalculateBy,
    changeRecipeCustomPrice
}, dispatch)

export default connect(null, mapDispatchToProps)(Item)