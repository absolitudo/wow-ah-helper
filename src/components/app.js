import React from 'react'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'


import PriceChart from './priceChart'
let data = [1, 2, 2, 5, 5, 5, 5, 5, 6, 6, 9, 9, 9, 11.1111]

const App = () => (
    <div>
        {console.log('app rendering')}
        <PriceChart data={data}/>
    </div>
)
/*
<Landing />
<MainContent />
*/
export default App