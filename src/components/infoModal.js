import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { toggleShowInfoModal } from '../redux/actions'

/* Components */
import UploadIcon from './uploadIcon'
import AuctionState from './auctionState'
import ProfessionState from './professionState'

var body = document.getElementsByTagName('body')[0]

class InfoModal extends React.Component {
    componentDidMount() {
        body.classList.add('hidden-body')
    }
    componentWillUnmount() {
        body.classList.remove('hidden-body')
    }
    render() {
        return (
            <div className='info-modal-container' onClick={this.props.toggleShowInfoModal}>
                {console.log('infoModal.js rendering')}
                <section className='info-modal' onClick={handleModalClick}>
                    <button onClick={this.props.toggleShowInfoModal} className='close-button'>X</button>
                    <div className="text-wrapper">
                        <h3>
                            This web app helps you to decided what to craft from the auction house of World of warcraft 5.4.8.
                        </h3>
                        <p>
                            It uses the data of <a href="https://wow.curseforge.com/projects/auctioneer/files" target='_blank' rel="noopener noreferrer">Auctioneer</a> addon.
                            You have to scan the auction house with the addon to extract data with it. You can use this data to calculate which recipes are worth crafting.
                            The auction data is called "Auc-ScanData.lua" and it can be found at 
                            <code>
                                <span className='hightlight-span'>{'{YOURWOWCLIENT}'}</span>/WTF/Account/<span className='hightlight-span'>{'{YOURACCOUNTNAME}'}</span>/SavedVariables/Auc-ScanData.lua
                            </code>
                        </p>
                        <h2>App state:</h2>

                        <div className="state-wrapper">
                            <ProfessionState state={true} />
                            <AuctionState state={true} loading={false} />
                        </div>

                        <p>
                            Profession state tells you if the data for the professions loaded. Auction data is the data u should provide to make calculations.
                        </p>

            
                        <h2>Select auction data:</h2>
            
                        <div className='get-auction-preview'>
                            <button className='upload'>
                                <UploadIcon />
                                Select auction data
                            </button>
                            <button className='submit'>
                                Submit
                            </button>
                        </div>
                        <p>
                            To provide data click on the "Select auction data" button. Your auction data can be found at:
                            <code>
                                    <span className='hightlight-span'>{'{YOURWOWCLIENT}'}</span>/WTF/Account/<span className='hightlight-span'>{'{YOURACCOUNTNAME}'}</span>/SavedVariables/Auc-ScanData.lua
                            </code>
                            Then hit submit.
                        </p>
            
                        <h2>Select a recipe:</h2>
                        <p>
                            To calculate the profits you have to select a recipe. First select a profession from the dropdown, then click on a recipe name. You can use the search function to quickly find a recipe.
                        </p>
                        <h2>Recipe view:</h2>
                        <div className='display-recipe'>
                            <RecipePreview
                                ingredient={previewRecipe}
                                recipe={true}
                            />
                            <RecipePreview
                                ingredient={previewIngredient1}
                                recipe={false}
                            />
                            <RecipePreview
                                ingredient={previewIngredient2}
                                recipe={false}
                            />
                            <RecipePreview
                                ingredient={previewIngredient3}
                                recipe={false}
                            />
                        </div>
                        <p>In the recipe view you can see how many and what items are required to make a certain recipe. The first table is the recipe itself, the rest are the ingredients. You can see the the median, average buyout, minimum buyout of the items. The last cell is an input field where you can put your custom price tag if you want to. If you make calculations without price for an item, the price is going to default to 0 for it.</p>
                        <h2>Calculation tab:</h2>
                        <p>
                            In the calculation tab you can select options on how to make the calculations. The profit for making the recipe is also displayed here.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

const previewRecipe = {
    name: 'Flask of Winter\'s Bite',
    amount: 1,
    medianBuyout: 303,
    avgBuyout: 322,
    minBuyout: 274,
    customPrice: 303
}

const previewIngredient1 = {
    name: 'Crystal Vial	',
    amount: 1,
    medianBuyout: 'NaN',
    avgBuyout: 'NaN',
    minBuyout: 'NaN',
    customPrice: ''
}

const previewIngredient2 = {
    name: 'Fool\'s Cap',
    amount: 4,
    medianBuyout: 12.5,
    avgBuyout: 12,
    minBuyout: 7.5,
    customPrice: 12.5
}

const previewIngredient3 = {
    name: 'Golden Lotus',
    amount: 1,
    medianBuyout: 220,
    avgBuyout: 214,
    minBuyout: 149,
    customPrice: 220
}

const RecipePreview = (props) => (
    <table className={props.recipe ? 'display-price display-price-recipe' : 'display-price'}>
        {!props.recipe && (
            <caption>{props.ingredient.amount > 1 ?  props.ingredient.amount + 'x ' + props.ingredient.name : props.ingredient.name}</caption>
        )}
        <thead>
            <tr>
                <th>M</th>
                <th>Avg Bo</th>
                <th>Min Bo</th>
                <th>C</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    {props.ingredient.medianBuyout}
                </td>
                <td>
                    {props.ingredient.avgBuyout}
                </td>
                <td>
                    {props.ingredient.minBuyout}
                </td>
                <td>
                <input
                    type="number"
                    defaultValue={props.ingredient.customPrice}
                />
                </td>
            </tr>
        </tbody>
    </table>
)


const handleModalClick = (event) => {
    event.stopPropagation()
    return false
}

const mapDispatchToprops = (dispatch) => bindActionCreators({ toggleShowInfoModal }, dispatch)

export default connect(null, mapDispatchToprops)(InfoModal)