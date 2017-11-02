import React from 'react'
import { connect } from 'react-redux'

/* Components */
import DisplayPrice from './displayPrice'
import IngredientsWrapper from './ingredientsWrapper'
const DisplayRecipe = (props) => {
    console.log('displayRecipe.js rendering')
    if(props.selectedRecipe) {
        
        return (
            <section className='display-recipe'>
                <h3>
                    {props.selectedRecipe.amount > 1 ? props.selectedRecipe.amount + 'x' + props.selectedRecipe.name : props.selectedRecipe.name}
                </h3>

                <DisplayPrice
                    ingredient={props.selectedRecipe}
                    recipe={true}
                />
                
                <IngredientsWrapper />

            </section>
        )
    } else {
        return (
            <section className='display-recipe'>
                skeleton
            </section>
        )
    }

}
    

const mapStateToProps = (state) => (
    {
        selectedRecipe: state.selectedRecipe
    }
)

export default connect(mapStateToProps)(DisplayRecipe)