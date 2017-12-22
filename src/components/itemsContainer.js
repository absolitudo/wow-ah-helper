import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Components */
import Item from './item'

/* Action creator */
import { loadMoreItems } from '../redux/actions'

class ItemsContainer extends React.Component {
    
    shouldComponentUpdate(nextProps) {
        return nextProps.shouldItemsContainerUpdate
    }

    render() {
        let items = returnItemsToDisplay(this.props)
        
        return (
            <section className='items-container'>
                {this.props.professionData && items.map((item, i) => (
                    <Item item={item} key={i}/>
                ))}
                {items.length === this.props.numberOfItems && <button className='more-items' onClick={this.props.loadMoreItems}>More items</button>}
            </section>
        )
    }
}

export const returnItemsToDisplay = (props) => {
    let items = []
    if(props.professionData) {

        let professions = Object.keys(props.professionData).filter(prof => props.selectedProfession !== 'all' ? prof === props.selectedProfession : true).join('')
        let index = 0
        
        for(let prof in props.professionData) {
            if(professions.includes(prof)) {
                let profKeys = []
                for(let itemName in props.professionData[prof]) {
                    profKeys.push(itemName)
                }
                for(let i = profKeys.length - 1; i > 0; i -= 1) {
                    if(index < props.numberOfItems && profKeys[i].toLocaleLowerCase().includes(props.searchTerm.toLocaleLowerCase().trim())) {
                        items.push({...props.professionData[prof][profKeys[i]]})
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
    shouldItemsContainerUpdate: state.shouldItemsContainerUpdate
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadMoreItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)