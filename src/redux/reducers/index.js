import { handleActions } from 'redux-actions'

import reducers from './reducers'


export default handleActions({
    LOAD_AUCTION_DATA: reducers.loadAuctionData,
    GET_DATA_FILE_NAME: reducers.getDataFileName,
    GET_PROFESSION_DATA: reducers.getProfessionData,
    SELECT_PROFESSION: reducers.selectProfession,
    UPDATE_SEARCH_TERM: reducers.updateSearchTerm,
    CHANGE_CALCULATE_BY: reducers.changeCalculateBy,
    CHANGE_REAGENT_CUSTOM_PRICE: reducers.changeReagentCustomPrice,
    CHANGE_RECIPE_CUSTOM_PRICE: reducers.changeRecipeCustomPrice,
    SET_SHOULD_ITEMS_CONTAINER_UPDATE: reducers.setShouldItemsContainerUpdate,
    LOAD_MORE_ITEMS: reducers.loadMoreItems,
    SET_MOREINFO_DISPLAY: reducers.setMoreinfoDisplay
}, {
    searchTerm: '',
    numberOfItems: 20,
    shouldItemsContainerUpdate: true,
    searchItemsTimeout: false,
    selectedProfession: 'all',
    displayMoreinfo: false,
    notifications: [{
        type: 'error',
        message: 'Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :('
    },
    {
        type: 'error',
        message: 'Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :('
    },
    {
        type: 'error',
        message: 'Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :('
    },
    {
        type: 'error',
        message: 'Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :('
    },
    {
        type: 'error',
        message: 'Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :( Data error :('
    },
    {
        type: 'info',
        message: 'sending some info'
    }]
})