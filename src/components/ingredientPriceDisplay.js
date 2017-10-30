import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { customPriceChange } from '../redux/actions'

const IngredientPrice = (props) => (
    <div className='ingredient-price'>
        <div className='ingredient-price-row'>
            {!props.recipe && <p>Name</p>}
            <p>M</p>
            <p>Avg BO</p>
            <p>Min BO</p>
            <p>C</p>
        </div>

        <div className='ingredient-price-row'>
            {!props.recipe && <p>{props.ingredient.name}</p>}
            <p>{props.ingredient.medianBuyout}</p>
            <p>{props.ingredient.avgBuyout}</p>
            <p>{props.ingredient.minBuyout}</p>
            <input
                type="text"
                value={props.ingredient.customPrice}
                onChange={(event) => handleCustomPriceChange(event, props.ingredient, props.customPriceChange)}
            />
        </div>
    </div>
)

const handleCustomPriceChange = (event, ingredient, customPriceChange) => {
    customPriceChange({
        ingredientName: ingredient.name,
        customPrice: event.target.value
    })
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ customPriceChange }, dispatch)

export default connect(null, mapDispatchToProps)(IngredientPrice)