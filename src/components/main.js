import React from 'react'

/* Components */
import RecipeList from './recipeList'
import DisplayRecipe from './displayRecipe'
import CalcProfit from './calcProfit'


const Main = (props) => (
    <main>
        {console.log('main.js rendering')}
        <RecipeList />
        <div className='main-left-wrapper'>
            <DisplayRecipe />
            <CalcProfit />
        </div>
    </main>
)

export default Main