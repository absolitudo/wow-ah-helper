import React from 'react'
import { connect } from 'react-redux'

/* Components */
import DisplayPrice from './displayPrice'

const IngredientsWrapper = (props) => (
     <div className='ingredient-wrapper'>
         {console.log(props.ingredients)}
        {props.ingredients.map((ingredient, index) => (
            <DisplayPrice
                ingredient={ingredient}
                recipe={false}
                key={index}
            />
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    ingredients: state.selectedRecipe.ingredients
})

export default connect(mapStateToProps)(IngredientsWrapper)