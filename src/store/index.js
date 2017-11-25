import { createStore, applyMiddleware, compose } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk, reduxPackMiddleware]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store
