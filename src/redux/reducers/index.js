import { handleActions } from 'redux-actions'

import auctionDataReducer from './auctionDataReducer'
import professionsDataReducer from './professionsDataReducer'


export default handleActions({
    LOAD_AUCTION_DATA: auctionDataReducer,
    LOAD_PROFESSIONS_DATA: professionsDataReducer
}, {
    appState: {
        professionsData: false
    }
})