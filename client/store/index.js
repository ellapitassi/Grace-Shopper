import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import tutors from './tutors'
import teachables from './teachables'
const reducer = combineReducers({ user, tutors, teachables, orders})
import orders from './orders'
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './tutors'
export * from './teachables'
export * from './orders'

