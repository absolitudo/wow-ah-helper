import { handleActions } from 'redux-actions'

export default handleActions({
    INPUT_DATA: (state, action) => ({...state, data: action.payload})
}, {})