import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { setMoreinfoDisplay } from '../redux/actions'

const MoreInfo = (props) => (
    <div className='more-info-container' onClick={() => props.setMoreinfoDisplay(false)}>
        <section className='more-info' onClick={(e) => e.stopPropagation()}>
            info
        </section>
    </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setMoreinfoDisplay
}, dispatch)

export default connect(null, mapDispatchToProps)(MoreInfo)