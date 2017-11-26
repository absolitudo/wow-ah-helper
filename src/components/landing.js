import React from 'react'

const Landing = (props) => (
    <header className='landing'>
        {console.log('landing rendering')}
        <div className="container">
            <div className="get-data">
                <p>Data is stored:</p>
                <code>/YOURWOWCLIENT/WTF/Account/YOURACCOUNTNAME/SavedVariables/Auc-ScanData.lua</code>
                <input type="file" />
                <button>Provide Data</button>
            </div>
        </div>
    </header>
)

export default Landing