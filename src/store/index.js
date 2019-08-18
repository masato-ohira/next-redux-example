import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import exampleReducer from '~/store/modules/example'
import routeReducer from '~/store/modules/route'

// export function initializeStore (initialState = exampleInitialState) {
//   return createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware())
//   )
// }

export function initializeStore(initialState = {}) {
  const store = reduxCreateStore(
    combineReducers({
      example: exampleReducer,
      route: routeReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(
      // logger,
      thunkMiddleware,
    ))
  )
  return store
}
