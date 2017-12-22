import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { setMoreinfoDisplay } from '../redux/actions'

class Moreinfo extends React.Component {
    componentWillMount() {
        document.body.classList.add('modal-open')
    }

    componentWillUnmount() {
        document.body.classList.remove('modal-open')
    }

    render() {
        return (
            <div className='more-info-container' onClick={() => this.props.setMoreinfoDisplay(false)}>
                <section className='more-info' onClick={(e) => e.stopPropagation()}>
                    info
                </section>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => bindActionCreators({
    setMoreinfoDisplay
}, dispatch)

export default connect(null, mapDispatchToProps)(Moreinfo)