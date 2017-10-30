import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}
  
let createStoreWithMiddleware = applyMiddleware(logger)(createStore)

export default createStore(reducer)
