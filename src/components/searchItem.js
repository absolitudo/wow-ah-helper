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
            onChange={(event) => handleSearchInputChange(event, props, props.updateSearchTerm)}
            placeholder={'Search by item name...'}
            />
        <div className="prof-req">
            <input 
                type="number"
                value={props.minProfReq}
                min={0}
                max={600}
                onChange={(event) => handleSearchInputChange(event, props, props.updateMinProfReq, props.minProfReq)}
                />
            -
            <input 
                type="number"
                value={props.maxProfReq}
                onChange={(event) => handleSearchInputChange(event, props, props.updateMaxProfReq, props.maxProfReq)}
                />

        </div>
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
    } else {
        validateProfReqChange(event, action, defaultValue, newTimeout)
    }
}

const validateProfReqChange = (event, action, defaultValue, timeout) => {
    let value = event.target.value
    if (value === '') {
        action({
            value: '0',
            timeout: timeout
        })
    } else if(+value < 0 || +value > 600) {
        action({
            value: defaultValue,
            timeout: timeout
        })
    } else if(value.length > 1) {
        value = value.replace(/^0+/, '')
        action({
            value: value || '0',
            timeout: timeout
    })
    } else {
        action({
            value: value,
            timeout: timeout
        })
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