import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// It still recognizes plain object actions
store.dispatch({ type: 'INCREMENT' })

//thunk
function updateAction(dispatch) {
  // ... which themselves may dispatch many times
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })

  setTimeout(() => {
    // ... even asynchronously!
    dispatch({ type: 'DECREMENT' })
  }, 1000)
})