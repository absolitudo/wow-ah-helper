import { handleActions } from 'redux-actions'

import reducers from './reducers'


export default handleActions({
    LOAD_AUCTION_DATA: reducers.loadAuctionData,
    LOAD_PROFESSIONS_DATA: reducers.loadProfessionsData,
    CHANGE_AUCTION_DATA_NAME: reducers.changeAuctionDataName,
    AUCTION_DATA_PROCESSING: reducers.auctionDataProcessing
}, {
    appState: {
        professionsData: false,
        auctionData: false,
        auctionDataFileName: null,
        auctionDataProcessing: true
    }
})