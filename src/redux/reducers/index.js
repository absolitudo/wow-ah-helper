import { handleActions } from 'redux-actions'

import reducers from './reducers'


export default handleActions({
    LOAD_AUCTION_DATA: reducers.loadAuctionData,
    LOAD_PROFESSIONS_DATA: reducers.loadProfessionsData,
    CHANGE_AUCTION_DATA_NAME: reducers.changeAuctionDataName,
    AUCTION_DATA_PROCESSING: reducers.auctionDataProcessing,
    SELECT_PROFESSION: reducers.selectProfession,
    UPDATE_SEARCH_TERM: reducers.updateSearchTerm,
    SELECT_RECIPE: reducers.selectRecipe,
    CUSTOM_PRICE_CHANGE: reducers.customPriceChange,
    CHANGE_CALC_QUANTITY: reducers.changeCalcQuantity,
    TOGGLE_CALC_AUCTION_CUT: reducers.toggleCalcAuctionCut,
    CHANGE_CALC_CALCULATEBY: reducers.changeCalcCalculateBy,
    TOGGLE_SHOW_INFO_MODAL: reducers.toggleShowInfoModal
}, {
    professionsData: false,
    auctionData: false,
    auctionDataFileName: null,
    auctionDataProcessing: false,
    profession: 'alchemy',
    searchTerm: '',
    selectedRecipeName: null,
    selectedRecipe: undefined,
    calcProfit: {
        quantity: 1,
        auctionCut: true,
        calculateBy: 'customPrice',
        profit: 0
    },
    showInfoModal: true

})