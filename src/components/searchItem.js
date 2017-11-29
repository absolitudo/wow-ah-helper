import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { 
    updateSearchTerm,
    updateMinProfReq,
    updateMaxProfReq
} from '../redux/actions'

const SearchItem = (props) => (
    <div className='search-container'>
        <input 
            type="text"
            value={props.searchTerm}
            onChange={(event) => props.updateSearchTerm(event.target.value)}
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
    maxProfReq: state.maxProfReq
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSearchTerm,
    updateMinProfReq,
    updateMaxProfReq
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem)