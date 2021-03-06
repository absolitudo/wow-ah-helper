import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators*/
import { selectProfession } from '../redux/actions'

const ProfessionSelector = (props) => {
    if(props.professions) {
        return (
            <div className='profession-selector'>
                <ul className='desktop-professions'>
                    {props.professions.map((profession, index) => (
                        <li 
                            key={index}
                            className={props.selectedProfession === profession ? 'profession selected-profession' : 'profession'}
                            onClick={() => props.selectProfession(profession)}
                            >
                            {applyEllipsis(profession)}
                        </li>
                    ))}
                </ul>
                <select 
                    className='mobile-professions' 
                    onChange={(event) => props.selectProfession(event.target.value)}
                    >
                    {props.professions.map((profession, index) => (
                        <option
                            value={profession}
                            key={index}
                            className={'profession'}
                            >
                            {profession.replace(/\w/, letter => letter.toUpperCase())}    
                        </option>
                    ))}
                </select>
            </div>
        )
    } else {
        return (
            <div className='professions-skeleton'>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="profession-skeleton"></div>
                <div className="mobile-profession-skeleton"></div>
            </div>
        )
    }
}

const applyEllipsis = (professionName) => {
    if(professionName.length > 9) {
        return professionName.slice(0, 9) + '...'
    }
    return professionName
}

const mapStateToProps = (state) => ({
    professions: state.professions,
    selectedProfession: state.selectedProfession
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectProfession }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionSelector)