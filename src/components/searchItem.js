import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { 
    updateSearchTerm,
    setShouldItemsContainerUpdate
} from '../redux/actions'

const SearchItem = (props) => (
    <div className='search-container'>
        <input 
            type="text"
            value={props.searchTerm}
            onChange={(event) => handleSearchInputChange(event, props, props.updateSearchTerm)}
            placeholder={'Search by item name...'}
            />
    </div>
)

const handleSearchInputChange = (event, props, action, defaultValue) => {
    if(props.searchItemsTimeout) {
        clearTimeout(props.searchItemsTimeout)
    }

    var newTimeout = setTimeout(() => {
        props.setShouldItemsContainerUpdate(true)
    }, 400)

    if(!defaultValue) {
        action({
            searchTerm: event.target.value,
            timeout: newTimeout
        })
    }
}

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    searchItemsTimeout: state.searchItemsTimeout
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSearchTerm,
    setShouldItemsContainerUpdate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem)