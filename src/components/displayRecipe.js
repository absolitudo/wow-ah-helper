import React from 'react'
import { connect } from 'react-redux'

/* Components */
import IngredientPrice from './ingredientPriceDisplay'

const DisplayRecipe = (props) => {
    console.log('displayRecipe.js rendering')
    console.log(props.selectedRecipe)
    if(props.selectedRecipeName && props.selectedRecipe) {
        
        return (
            <section className='display-recipe'>
                <h3>
                    {props.selectedRecipeName}
                </h3>

                <IngredientPrice
                    ingredient={props.selectedRecipe}
                    recipe={true}
                />

                <div className='ingredient-wrapper'>
                    {props.selectedRecipe.ingredients.map((ingredient, index) => (
                        <IngredientPrice
                            ingredient={ingredient}
                            recipe={false}
                            key={index}
                        />
                    ))}
                </div>           

            </section>
        )
    } else {
        return (
            <section className='display-recipe'>
                skeleton of recipe
            </section>
        )
    }

}
    

const mapStateToProps = (state) => {
    return {
        auctionData: state.auctionData ? true : false,
        selectedRecipe: state.selectedRecipe,
        selectedRecipeName: state.selectedRecipeName
    }
}

export default connect(mapStateToProps)(DisplayRecipe)