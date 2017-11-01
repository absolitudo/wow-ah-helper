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
        <div className='calc-profit-left'>
            <label className='calc-quantity'>
                Quantity:
                <input
                    type="number" 
                    value={props.calcProfit.quantity}
                    onChange={(event) => props.changeCalcQuantity(event.target.value)}
                />

            </label>
            <label className='calc-auction-cut'>
                AuctionCut:
                <input
                    type="checkbox"
                    checked={props.calcProfit.auctionCut}
                    onChange={props.toggleCalcAuctionCut}
                />

            </label>

        </div>
            
        <div className="calc-profit-right">

            <label>
                <input
                    type="radio"
                    name="calcBy"
                    value={'medianBuyout'}
                    checked={'medianBuyout' === props.calcProfit.calculateBy}
                    onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                />
                Median
            </label>

            <label>
                <input
                    type="radio"
                    name="calcBy"
                    value={'avgBuyout'}
                    checked={'avgBuyout' === props.calcProfit.calculateBy}
                    onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                />
                Average buyout
            </label>
            <label>
                <input
                    type="radio"
                    name="calcBy"
                    value={'minBuyout'}
                    checked={'minBuyout' === props.calcProfit.calculateBy}
                    onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                />
                Minimum buyout
            </label>
            <label>
                <input
                    type="radio"
                    name="calcBy"
                    value={'customPrice'}
                    checked={'customPrice' === props.calcProfit.calculateBy}
                    onChange={(event) => props.changeCalcCalculateBy(event.target.value)}
                />
                Custom Price
            </label>
        </div>
        <div className='profit-container'>
            <h2>
                {calculateProfit(props)}
            </h2>
        </div>
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
        return props.calcProfit.auctionCut ? profit - (profit * 0.05) : profit

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