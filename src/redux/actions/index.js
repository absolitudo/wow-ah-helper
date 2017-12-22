import { createAction } from 'redux-actions'

export const loadAuctionData = createAction('LOAD_AUCTION_DATA')
export const getDataFileName = createAction('GET_DATA_FILE_NAME')
export const getProfessionData = createAction('GET_PROFESSION_DATA')
export const selectProfession = createAction('SELECT_PROFESSION')
export const updateSearchTerm = createAction('UPDATE_SEARCH_TERM')
export const updateMinProfReq = createAction('UPDATE_MIN_PROF_REQ')
export const updateMaxProfReq = createAction('UPDATE_MAX_PROF_REQ')
export const changeCalculateBy = createAction('CHANGE_CALCULATE_BY')
export const changeReagentCustomPrice = createAction('CHANGE_REAGENT_CUSTOM_PRICE')
export const changeRecipeCustomPrice = createAction('CHANGE_RECIPE_CUSTOM_PRICE')
export const setShouldItemsContainerUpdate = createAction('SET_SHOULD_ITEMS_CONTAINER_UPDATE')
export const loadMoreItems = createAction('LOAD_MORE_ITEMS')
export const setMoreinfoDisplay = createAction('SET_MOREINFO_DISPLAY')
export const addNotification = createAction('ADD_NOTIFICATION')
export const removeNotification = createAction('REMOVE_NOTIFICATION')

