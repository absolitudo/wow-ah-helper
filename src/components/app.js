import React from 'react'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'

import PriceChart from './priceChart'

let data = [
    {
        price: 5,
        amount: 1
    },
    {
        price: 6,
        amount: 4
    },
    {
        price: 14,
        amount: 2
    },
    {
        price: 20,
        amount: 10
    }
]



const App = () => (
    <div>
        {console.log('app rendering')}
        <PriceChart data={data} amount={data.length} />
    </div>
)
/*
<Landing />
<MainContent />
*/
export default App