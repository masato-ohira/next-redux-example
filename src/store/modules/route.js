import sleep from 'sleep-promise'

export const routeInitState = {
  path: null,
  name: null,
}

export const actionTypes = {
  PATH: 'route/PATH',
  NAME: 'route/NAME',
}

// REDUCERS
// ------------------------------
export default function reducer(state = routeInitState, action) {
  switch (action.type) {
    case actionTypes.PATH:
      return {
        ...state,
        path: action.path,
      }
    case actionTypes.NAME:
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}

// ACTIONS
// ------------------------------
export const setPath = (router) => {
  return async dispatch => {
    await sleep(500)
    console.log({router})
    dispatch({
      type: actionTypes.PATH,
      path: JSON.stringify(router.query),
    })
  }
}
export const setName = () => {
  return async dispatch => {
    await sleep(1000)

    dispatch({
      type: actionTypes.NAME,
      name: 'async成功',
    })
  }
}
