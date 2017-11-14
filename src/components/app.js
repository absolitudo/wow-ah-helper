import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { loadProfessionsData } from '../redux/actions'

/* Components */
import Header from './header'
import Main from './main'
import InfoModal from './infoModal'
import Notifier from './notifier'
import Footer from './footer'

class App extends React.PureComponent {
    componentDidMount() {
        fetch('https://my-wow-api.herokuapp.com/professions/all')
            .then(res => res.json())
            .then(res => this.props.loadProfessionsData(res))
    }

    render() {
        return (
            <div>
                {this.props.showInfoModal && <InfoModal />}
                <Header />
                <Main />
                <Notifier />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showInfoModal: state.showInfoModal
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ loadProfessionsData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)