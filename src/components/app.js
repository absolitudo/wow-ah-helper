import React from 'react'

/* Components */
import Landing from './landing'
import MainContent from './mainContent'



const App = () => (
    <div>
        {console.log('app rendering')}
        <Landing />
        <MainContent />
    </div>
)

export default App