import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import {
    changeCalcQuantity,
    toggleCalcAuctionCut,
    changeCalcCalculateBy
} from '../redux/actions'

const CalcProfit = (props) => (
    <section className='calc-profit'>
    {console.log('calcProfit.js rendering')}
        <h2>Profit</h2>
        <div>
            <input
                type="number" 
                value={props.calcProfit.quantity}
                onChange={(event) => props.changeCalcQuantity(event.target.value)}
                id='quantity-input'
            />
            <label htmlFor='quantity-input'>Quantity</label>
        </div>

        <div>
            <input
                type="checkbox"
                checked={props.calcProfit.auctionCut}
                onChange={props.toggleCalcAuctionCut}
                id='auction-cut-input'
            />
            <label htmlFor='auction-cut-input'>AuctionCut</label>
        </div>

        <div>
                <input
                    type="radio"
                    name="calcBy"
                    value={'medianBuyout'}
                    checked={'medianBuyout' === props.calcProfit.calculateBy}
                    onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                    id='radio-median'
                />
            <label htmlFor='radio-median'>Median</label>
        </div>
        
        <div>
            <input
                type="radio"
                name="calcBy"
                value={'avgBuyout'}
                checked={'avgBuyout' === props.calcProfit.calculateBy}
                onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                id='radio-average'
            />
            <label htmlFor='radio-average'>Average buyout</label>
        </div>

        <div>
            <input
                type="radio"
                name="calcBy"
                value={'minBuyout'}
                checked={'minBuyout' === props.calcProfit.calculateBy}
                onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                id='radio-minbo'
            />
            <label htmlFor='radio-minbo'>Minimum buyout</label>
        </div>

        <div>
            <input
                type="radio"
                name="calcBy"
                value={'customPrice'}
                checked={'customPrice' === props.calcProfit.calculateBy}
                onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                id='radio-custom'
            />
            <label htmlFor='radio-custom'>Custom Price</label>
        </div>

        {props.selectedRecipe && (
            <h2>
                {calculateProfit(props)}
            </h2>
        )}
    </section>
)

const calculateProfit = (props) => {
    /* If there is a recipe selected do the calculation */
    if(props.selectedRecipe) {
        /* Calculate the price of the ingredients */
        let ingredientsPrice = props.selectedRecipe.ingredients.reduce((acc, ingredient, index) => {
            return acc + ((ingredient[props.calcProfit.calculateBy] * ingredient.amount) || 0)

        }, 0)
        /* Calculate profit */
        let profit = ((props.selectedRecipe[props.calcProfit.calculateBy] * props.selectedRecipe.amount || 0) - ingredientsPrice) * props.calcProfit.quantity / 10000

        /* Return profit with or without auction cut */
        return (props.calcProfit.auctionCut ? profit - (profit * 0.05) : profit).toFixed(4)

    } else {
        return ''

    }
}

const mapStateToProps = (state) => (
    {
        selectedRecipe: state.selectedRecipe,
        calcProfit: state.calcProfit
    }
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeCalcQuantity,
    toggleCalcAuctionCut,
    changeCalcCalculateBy
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CalcProfit)