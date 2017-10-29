import React from 'react'
import { connect } from 'react-redux'


const DisplayRecipe = (props) => {
    console.log('displayRecipe.js rendering')
    
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
    

const mapStateToProps = (state) => {
    return {
        auctionData: state.auctionData || undefined,
        selectedRecipe: state.selectedRecipe
    }
}

export default connect(mapStateToProps)(DisplayRecipe)