import { handleActions } from 'redux-actions'

import reducers from './reducers'


export default handleActions({
    LOAD_AUCTION_DATA: reducers.loadAuctionData,
    GET_DATA_FILE_NAME: reducers.getDataFileName,
    GET_PROFESSION_DATA: reducers.getProfessionData,
    SELECT_PROFESSION: reducers.selectProfession
}, {

})