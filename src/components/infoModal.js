import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { toggleShowInfoModal } from '../redux/actions'


const InfoModal = (props) => (
    <div className='info-modal-container' onClick={props.toggleShowInfoModal}>
        {console.log('infoModal.js rendering')}
        <section className='info-modal' onClick={handleModalClick}>
            info modal

        </section>
    </div>
)

const handleModalClick = (event) => {
    event.stopPropagation()
    return false
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ toggleShowInfoModal }, dispatch)

export default connect(null, mapDispatchToProps)(InfoModal)