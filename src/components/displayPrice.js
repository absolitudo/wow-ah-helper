import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { customPriceChange } from '../redux/actions'

const DisplayPrice = (props) => (
    <div className='display-price'>
        <div className='display-price-row'>
            {!props.recipe && <p>Name</p>}
            <p>M</p>
            <p>Avg BO</p>
            <p>Min BO</p>
            <p>C</p>
        </div>

        <div className='display-price-row'>
            {!props.recipe && <p>{props.ingredient.name}</p>}
            <p>{props.ingredient.medianBuyout}</p>
            <p>{props.ingredient.avgBuyout}</p>
            <p>{props.ingredient.minBuyout}</p>
            <input
                type="number"
                value={props.ingredient.customPrice}
                onChange={(event) =>  props.customPriceChange({
                    ingredientName: props.ingredient.name,
                    customPrice: event.target.value
                })}
            />
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({ customPriceChange }, dispatch)

export default connect(null, mapDispatchToProps)(DisplayPrice)