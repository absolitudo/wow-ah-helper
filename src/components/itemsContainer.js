import React from 'react'
import { connect } from 'react-redux'

import Item from './item'

const ItemsContainer = (props) => {
    let items = []
    if(props.professionData) {

        let professions = Object.keys(props.professionData).filter(prof => props.selectedProfession !== 'all' ? prof === props.selectedProfession : true).join('')
        let index = 0
        
        for(let prof in props.professionData) {
            if(professions.includes(prof)) {
                for(let itemName in props.professionData[prof]) {
                    if(index < props.numberOfItems) {
                        items.push({...props.professionData[prof][itemName],
                            itemName: itemName
                        })
                        index += 1
                    } else {
                        break
                    }
                }
                if(index >= props.numberOfItems) {
                    break
                }
            }
        }
        console.log(index)
    }


    return (
        <section>
            {console.log('itemscontainer rendering')}
            {props.professionData && items.map((item, i) => (
                <Item item={item} key={i}/>
            ))}
        </section>
    )
}

const mapStateToProps = (state) => ({
    professionData: state.professionData,
    selectedProfession: state.selectedProfession,
    numberOfItems: state.numberOfItems
})

export default connect(mapStateToProps)(ItemsContainer)