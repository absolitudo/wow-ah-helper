import { handleActions } from 'redux-actions'

import reducers from './reducers'


export default handleActions({
    LOAD_AUCTION_DATA: reducers.loadAuctionData,
}, {

})