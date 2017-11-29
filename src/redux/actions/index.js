import { createAction } from 'redux-actions'

export const loadAuctionData = createAction('LOAD_AUCTION_DATA')
export const getDataFileName = createAction('GET_DATA_FILE_NAME')
export const getProfessionData = createAction('GET_PROFESSION_DATA')
export const selectProfession = createAction('SELECT_PROFESSION')
export const updateSearchTerm = createAction('UPDATE_SEARCH_TERM')
export const updateMinProfReq = createAction('UPDATE_MIN_PROF_REQ')
export const updateMaxProfReq = createAction('UPDATE_MAX_PROF_REQ')




