import React from 'react'
import { connect } from 'react-redux'


const DisplayRecipe = (props) => {
    console.log(props)
    if(props.name) {
        
        return (
            <section className='display-recipe'>
                display recipe
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
    

const mapStateToProps = (state) => state.selectedRecipe

export default connect(mapStateToProps)(DisplayRecipe)