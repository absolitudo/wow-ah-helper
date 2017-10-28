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

            {console.log(props.recipeList)}
            
            <input
                type="text"
                placeholder='search'
                value={props.recipeList.searchTerm} 
                onChange={(e) => searchRecipe(e, props.updateSearchTerm)}
            />
        </section>
    )
}

const handleProfessionSelection = (event, selectProfession) => (
    selectProfession(event.target.value)
)

const searchRecipe = (event, updateSearchTerm) => {
    console.log(event.target.value)
    updateSearchTerm(event.target.value)
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectProfession, updateSearchTerm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)