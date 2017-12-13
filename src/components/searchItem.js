import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { 
    updateSearchTerm,
    updateMinProfReq,
    updateMaxProfReq,
    setShouldItemsContainerUpdate
} from '../redux/actions'

const SearchItem = (props) => (
    <div className='search-container'>
        <input 
            type="text"
            value={props.searchTerm}
            onChange={(event) => handleSearchInputChange(event, props)}
            placeholder={'Search by item name...'}
            />
        <div className="prof-req">
            <input 
                type="number"
                value={props.minProfReq}
                min={0}
                max={600}
                onChange={(event) => validateNumberChange(event, props.updateMinProfReq, props.minProfReq)}
                />
            -
            <input 
                type="number"
                value={props.maxProfReq}
                onChange={(event) => validateNumberChange(event, props.updateMaxProfReq, props.maxProfReq)}
                />

        </div>
    </div>
)

const handleSearchInputChange = (event, props) => {
    if(props.searchItemsTimeout) {
        clearTimeout(props.searchItemsTimeout)
    }

    var newTimeout = setTimeout(() => {
        props.setShouldItemsContainerUpdate(true)
    }, 500)

    props.updateSearchTerm({
        searchTerm: event.target.value,
        timeout: newTimeout
    })
}

const validateNumberChange = (event, action, defaultValue) => {
    let value = event.target.value
    if (value === '') {
        action('0')
    } else if(+value < 0 || +value > 600) {
        action(defaultValue)
    } else if(value.length > 1) {
        value = value.replace(/^0+/, '')
        action(value || '0')
    } else {
        action(value)
    }
}

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    minProfReq: state.minProfReq,
    maxProfReq: state.maxProfReq,
    searchItemsTimeout: state.searchItemsTimeout
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSearchTerm,
    updateMinProfReq,
    updateMaxProfReq,
    setShouldItemsContainerUpdate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem)