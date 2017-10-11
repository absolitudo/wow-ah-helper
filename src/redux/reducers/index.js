import { handleActions } from 'redux-actions'

import inputDataReducer from './inputDataReducer'

export default handleActions({
    INPUT_DATA: inputDataReducer
}, {})