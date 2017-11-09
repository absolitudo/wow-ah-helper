import React from 'react'
import { connect } from 'react-redux'

/* Components */
import DisplayPrice from './displayPrice'

const DisplayRecipe = (props) => {
    if(props.selectedRecipe) {
        
        return (
            <section className='display-recipe'>
                <h2>
                    {props.selectedRecipe.amount > 1 ? props.selectedRecipe.amount + 'x ' + props.selectedRecipe.name : props.selectedRecipe.name}
                </h2>

                <DisplayPrice
                    ingredient={props.selectedRecipe}
                    recipe={true}
                />
                
                <div className='ingredient-wrapper'>
                    {props.selectedRecipe.ingredients.map((ingredient, index) => (
                        <DisplayPrice
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
            <section className='display-recipe-skeleton'>
                <p></p>
                <div className="skeleton-table">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="skeleton-table">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="skeleton-table">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
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