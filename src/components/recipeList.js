import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { selectProfession, updateSearchTerm } from '../redux/actions'


class RecipeList extends React.Component {
    componentDidUpdate() {
        console.log('update')
    }

    render() {
        console.log(this)
        let professions = []
        for(let profession in this.props.professionsData) {
            professions.push(profession)
        }
    
        if(this.props.professionsData) {
            var recipes = []
            if(this.props.recipeList.searchTerm) {
                recipes = this.props.professionsData[this.props.recipeList.profession].reduce((acc, recipe) =>{
                    if((recipe.name).toLowerCase().includes(this.props.recipeList.searchTerm.toLowerCase().trim())) {
                        acc.push(recipe.name)
                    }
                    return acc
                },[])
            } else {
                recipes = this.props.professionsData[this.props.recipeList.profession].map(recipe => recipe.name)
            }
    
            return (
                    <section className='recipe-list'>
                        <select onChange={(e) => handleProfessionSelection(e, this.props.selectProfession)}>
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
                            value={this.props.recipeList.searchTerm} 
                            onChange={(e) => searchRecipe(e, this.props.updateSearchTerm)}
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
}

const handleProfessionSelection = (event, selectProfession) => {
    selectProfession(event.target.value)
}

const searchRecipe = (event, updateSearchTerm) => {
    updateSearchTerm(event.target.value)
}

const mapStateToProps = (state) => {
    return {
        professionsData: state.professionsData,
        recipeList: state.recipeList
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectProfession, updateSearchTerm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)