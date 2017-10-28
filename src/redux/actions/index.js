import { createAction } from 'redux-actions'

export const loadAuctionData = createAction('LOAD_AUCTION_DATA')
export const loadProfessionsData = createAction('LOAD_PROFESSIONS_DATA')
export const changeAuctionDataFileName = createAction('CHANGE_AUCTION_DATA_NAME')
export const auctionDataProcessing = createAction('AUCTION_DATA_PROCESSING')
export const selectProfession = createAction('SELECT_PROFESSION')
export const updateSearchTerm = createAction('UPDATE_SEARCH_TERM')