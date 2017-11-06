import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES
const GET_ALL_TEACHABLES = 'GET_ALL_TEACHABLES'

//INITIAL STATE
const initialState = []

//ACTION CREATORS
const getAllTeachables = teachables => ({ type: GET_ALL_TEACHABLES, teachables: teachables })

//THUNK CREATORS
export const fetchteachables = () =>
    dispatch => {
        axios.get('/api/teachables')
            .then(res =>
                dispatch(getAllTeachables(res.data || initialState)))
            .catch(err => console.log(err))
    }

//REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TEACHABLES:
            return action.teachables //Object.assign({}, state, {teachables: action.teachables});
        default: return state
    }
}
