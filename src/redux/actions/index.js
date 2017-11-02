import { createAction } from 'redux-actions'

export const loadAuctionData = createAction('LOAD_AUCTION_DATA')
export const loadProfessionsData = createAction('LOAD_PROFESSIONS_DATA')
export const changeAuctionDataFileName = createAction('CHANGE_AUCTION_DATA_NAME')
export const auctionDataProcessing = createAction('AUCTION_DATA_PROCESSING')
export const selectProfession = createAction('SELECT_PROFESSION')
export const updateSearchTerm = createAction('UPDATE_SEARCH_TERM')
export const selectRecipe = createAction('SELECT_RECIPE')
export const customPriceChange = createAction('CUSTOM_PRICE_CHANGE')
export const changeCalcQuantity = createAction('CHANGE_CALC_QUANTITY')
export const toggleCalcAuctionCut = createAction('TOGGLE_CALC_AUCTION_CUT')
export const changeCalcCalculateBy = createAction('CHANGE_CALC_CALCULATEBY')
export const toggleShowInfoModal = createAction('TOGGLE_SHOW_INFO_MODAL')

