import React from 'react'
import { connect } from 'react-redux'


const DisplayRecipe = (props) => {
    console.log('displayRecipe.js rendering')
    console.log(props.selectedRecipe)
    if(props.selectedRecipeName && props.selectedRecipe) {
        
        return (
            <section className='display-recipe'>
                <h3>
                    {props.selectedRecipeName}
                </h3>
                <table className='recipe-price'>
                    <thead>
                        <tr>
                            <th>M</th>
                            <th>Avg BO</th>
                            <th>Min BO</th>
                            <th>C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.selectedRecipe.medianBuyout}</td>
                            <td>{props.selectedRecipe.avgBuyout}</td>
                            <td>{props.selectedRecipe.minBuyout}</td>
                            <td className='custom-price-cell'></td>
                        </tr>
                    </tbody>
                </table>
                <div className='ingredient-price-container'>
                    <table>
                        <thead>
                        </thead>
                    </table>
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