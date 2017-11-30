import React from 'react'

/* Components */
import ProfessionSelector from './professionSelector'
import SearchItem from './searchItem'
import ItemsContainer from './itemsContainer'

const MainContent = (props) => (
    <main>
        <ProfessionSelector />
        <SearchItem />
        <ItemsContainer />
    </main>
)


export default MainContent