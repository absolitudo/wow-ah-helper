import React from 'react'

const ProfessionState = (props) => {
    let spanStyle = {
        backgroundColor: props.state ? '#4caf50' : '#f44336'
    }

    return (
        <p>
            {console.log('professionState.js rendering')}
            Profession state:
            <span
                style={spanStyle}>
            </span>
        </p>
    )
}

export default ProfessionState