import { handleActions } from 'redux-actions'

import reducers from './reducers'


export default handleActions({
    LOAD_AUCTION_DATA: reducers.loadAuctionData,
    GET_DATA_FILE_NAME: reducers.getDataFileName,
    GET_PROFESSION_DATA: reducers.getProfessionData,
    SELECT_PROFESSION: reducers.selectProfession,
    UPDATE_SEARCH_TERM: reducers.updateSearchTerm,
    UPDATE_MIN_PROF_REQ: reducers.updateMinProfReq,
    UPDATE_MAX_PROF_REQ: reducers.updateMaxProfReq,
    CHANGE_CALCULATE_BY: reducers.changeCalculateBy,
    CHANGE_REAGENT_CUSTOM_PRICE: reducers.changeReagentCustomPrice,
    CHANGE_RECIPE_CUSTOM_PRICE: reducers.changeRecipeCustomPrice
}, {
    searchTerm: '',
    minProfReq: '0',
    maxProfReq: '600',
    numberOfItems: 10,
    shouldItemsContainerUpdate: true
})