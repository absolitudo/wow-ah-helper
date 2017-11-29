import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { updateSearchTerm } from '../redux/actions'

const SearchItem = (props) => (
    <div className='search-container'>
        <input 
            type="text"
            value={props.searchTerm}
            onChange={(event) => props.updateSearchTerm(event.target.value)}
            />
    </div>
)

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateSearchTerm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem)