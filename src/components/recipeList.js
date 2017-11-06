import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { selectProfession, updateSearchTerm, selectRecipe } from '../redux/actions'


const RecipeList = (props) => {
    console.log('recipeList.js rendering')
    let professions = []
    for(let profession in props.professionsData) {
        professions.push(profession)
    }

    if(props.professionsData) {
        var recipes = []
        if(props.searchTerm) {
            recipes = props.professionsData[props.profession].reduce((acc, recipe) =>{
                if((recipe.name).toLowerCase().includes(props.searchTerm.toLowerCase().trim())) {
                    acc.push(recipe.name)
                }
                return acc
            },[])
        } else {
            recipes = props.professionsData[props.profession].map(recipe => recipe.name)
        }

        return (
                <section className='recipe-list'>
                    <select onChange={(e) => handleProfessionSelection(e, props.selectProfession)}>
                        {professions.map((profession, index) => (
                            <option
                                value={profession}
                                key={index}>
                                {profession}
                            </option>
                        ))}
                    </select>
        
                    <input
                        type="text"
                        placeholder='search'
                        value={props.searchTerm} 
                        onChange={(e) => searchRecipe(e, props.updateSearchTerm)}
                    />
                        
                    <div className='recipes-container'>
                        {recipes && recipes.map((recipe, index) => (
                            <p
                                key={index}
                                onClick={(event) => handleRecipeClick(event, props.selectRecipe)}
                                className={recipe === props.selectedRecipeName ? 'selected-recipe' : ''}>
                                {recipe}
                            </p>
                        ))}
                    </div>
        
                </section>
                )
    } else {
        return (
            <section className='recipe-list'>
                <p>skeleton</p>
            </section>
        )
    }
}

const handleProfessionSelection = (event, selectProfession) => {
    selectProfession(event.target.value)
}

const searchRecipe = (event, updateSearchTerm) => {
    updateSearchTerm(event.target.value)
}

const handleRecipeClick = (event, selectRecipe) => {
    selectRecipe(event.target.innerHTML)
}

const mapStateToProps = (state) => {
    return {
        professionsData: state.professionsData,
        profession: state.profession,
        searchTerm: state.searchTerm,
        selectedRecipeName: state.selectedRecipeName
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectProfession, updateSearchTerm, selectRecipe }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)