
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

import sleep from 'sleep-promise'

const initState = {
  path: null,
  name: null,
}

export const actionTypes = {
  PATH: 'route/PATH',
  NAME: 'route/NAME',
}

// REDUCERS
// ------------------------------
export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.PATH:
      return Object.assign({}, state, {
        path: action.path,
      })
    case actionTypes.NAME:
      return Object.assign({}, state, {
        name: action.name,
      })
    default:
      return state
  }
}

// ACTIONS
// ------------------------------
export const setPath = (path) => {
  return {
    type: actionTypes.PATH, path,
  }
}
export const setRoute = (name) => {
  return async dispatch => {
    await sleep(1000)

    dispatch({
      type: actionTypes.NAME,
      name: 'async成功',
    })
  }
}
