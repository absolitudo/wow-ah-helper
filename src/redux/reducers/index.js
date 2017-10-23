import { handleActions } from 'redux-actions'

import auctionDataReducer from './auctionDataReducer'
import professionsDataReducer from './professionsDataReducer'


export default handleActions({
    LOAD_AUCTION_DATA: auctionDataReducer,
    LOAD_PROFESSIONS_DATA: professionsDataReducer,
    CHANGE_AUCTION_DATA_NAME: (state, action) => ({...state, appState: {...state.appState, auctionDataFileName: action.payload}}) 
}, {
    appState: {
        professionsData: false,
        auctionData: false,
        auctionDataFileName: null
    }
})