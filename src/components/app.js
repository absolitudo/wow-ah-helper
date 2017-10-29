import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { loadProfessionsData } from '../redux/actions'

/* Components */
import Header from './header'
import Main from './main'

class App extends React.PureComponent {
    componentDidMount() {
        fetch('https://my-wow-api.herokuapp.com/professions/all')
            .then(res => res.json())
            .then(res => this.props.loadProfessionsData(res))
    }

    render() {
        console.log('app.js rendering')
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ loadProfessionsData }, dispatch)

export default connect(null, mapDispatchToProps)(App)