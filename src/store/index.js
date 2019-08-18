import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import exampleReducer from './modules/example'
import routeReducer from './modules/route'


// export function initializeStore (initialState = exampleInitialState) {
//   return createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware())
//   )
// }


export function initializeStore(initialState = {sample: null}) {
  const store = reduxCreateStore(
    combineReducers({
      example: exampleReducer,
      route: routeReducer,
    }),
    initialState,
    applyMiddleware(
      logger,
      thunkMiddleware,
    )
    // composeWithDevTools(applyMiddleware())
  )
  return store
}
