import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


/* Action creators */
import { selectProfession, updateSearchTerm } from '../redux/actions'

const RecipeList = (props) =>  {
    let professions = []
    for(let profession in props.professionsData) {
        professions.push(profession)
    }

    if(props.appState.professionsData) {
        var recipes = []
        if(props.recipeList.searchTerm) {
            recipes = props.professionsData[props.recipeList.profession].reduce((acc, recipe) =>{
                if((recipe.name).toLowerCase().includes(props.recipeList.searchTerm.toLowerCase().trim())) {
                    acc.push(recipe.name)
                }
                return acc
            },[])
        } else {
            recipes = props.professionsData[props.recipeList.profession].map(recipe => recipe.name)
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
                        value={props.recipeList.searchTerm} 
                        onChange={(e) => searchRecipe(e, props.updateSearchTerm)}
                    />
                        
                    <div className='recipes-container'>
                        {recipes && recipes.map((recipe, index) => (
                            <p key={index}>{recipe}</p>
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

const handleProfessionSelection = (event, selectProfession) => (
    selectProfession(event.target.value)
)

const searchRecipe = (event, updateSearchTerm) => {
    updateSearchTerm(event.target.value)
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectProfession, updateSearchTerm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)