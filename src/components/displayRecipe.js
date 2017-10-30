import React from 'react'
import { connect } from 'react-redux'


const DisplayRecipe = (props) => {
    console.log('displayRecipe.js rendering')
    console.log(props.selectedRecipe)
    if(props.selectedRecipeName) {
        
        return (
            <section className='display-recipe'>
                {props.selectedRecipeName}
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