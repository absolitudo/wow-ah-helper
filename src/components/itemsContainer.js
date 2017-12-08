import React from 'react'
import { connect } from 'react-redux'

import Item from './item'

const ItemsContainer = (props) => {
   
    let items = returnItemsToDisplay(props)


    return (
        <section className='items-container'>
            {console.log('itemscontainer rendering')}
            {props.professionData && items.map((item, i) => (
                <Item item={item} key={i}/>
            ))}
        </section>
    )
}

export const returnItemsToDisplay = (props) => {
    let items = []
    if(props.professionData) {

        let professions = Object.keys(props.professionData).filter(prof => props.selectedProfession !== 'all' ? prof === props.selectedProfession : true).join('')
        let index = 0
        
        for(let prof in props.professionData) {
            if(professions.includes(prof)) {
                for(let itemName in props.professionData[prof]) {
                    if(index < props.numberOfItems && itemName.toLocaleLowerCase().includes(props.searchTerm.toLocaleLowerCase().trim()) && (props.professionData[prof][itemName].profReq ? (props.professionData[prof][itemName].profReq >= props.minProfReq && props.professionData[prof][itemName].profReq <= props.maxProfReq) : true)) {
                        items.push({...props.professionData[prof][itemName]})
                        index += 1
                    } 
                    if(index >= props.numberOfItems) {
                        break
                    }
                }
                if(index >= props.numberOfItems) {
                    break
                }
            }
        }
    }
    return items
}


const mapStateToProps = (state) => ({
    professionData: state.professionData,
    selectedProfession: state.selectedProfession,
    numberOfItems: state.numberOfItems,
    searchTerm: state.searchTerm,
    minProfReq: state.minProfReq,
    maxProfReq: state.maxProfReq
})

export default connect(mapStateToProps)(ItemsContainer)