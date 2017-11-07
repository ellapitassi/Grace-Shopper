import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import tutors from './tutors'
import teachables from './teachables'
import orders from './orders'
// import singleTutor from './'


const reducer = combineReducers({ user, tutors, teachables, orders })

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

