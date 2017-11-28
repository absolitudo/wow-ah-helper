import React from 'react'
import { connect } from 'react-redux'

const ProfessionSelector = (props) => {
    if(props.professions) {
        return (
            <div className='profession-selector'>
                <ul className='desktop-professions'>
                    {props.professions.map((profession, index) => (
                        <li key={index}>{profession}</li>
                    ))}
                </ul>
                <select name="" id="" className='mobile-professions'>sad</select>
            </div>
        )
    } else {
        return (
            <div className='professions-skeleton'>profession selection skeleton</div>
        )
    }
}

const mapStateToProps = (state) => ({
    professions: state.professions
})

export default connect(mapStateToProps)(ProfessionSelector)