import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES
const GET_ALL_TEACHABLES = 'GET_ALL_TEACHABLES'
const GET_USER_TEACHABLES = 'GET_USER_TEACHABLES'

//INITIAL STATE
const initialState = []

//ACTION CREATORS
const getAllTeachables = teachables => ({ type: GET_ALL_TEACHABLES, teachables: teachables })
const getUserTeachables = userTeachables => ({ type: GET_USER_TEACHABLES, userTeachables: userTeachables })

//THUNK CREATORS
export const fetchteachables = () =>
    dispatch => {
        axios.get('/api/teachables')
            .then(res =>
                dispatch(getAllTeachables(res.data || initialState)))
            .catch(err => console.log(err))
    }

export const fetchTeachablesById = (id) =>
    dispatch => {
        //console.log("---getUserTeachbles(inside store)--->", id)
        axios.get(`/api/users/${id}`)
            .then(res => {
                //console.log("--hi>>>>---getUserTeachbles--->", res.data)
                dispatch(getUserTeachables(res.data || initialState))
            })
            .catch(err => console.log(err))
    }

//REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TEACHABLES:
            return action.teachables //Object.assign({}, state, {teachables: action.teachables});
        case GET_USER_TEACHABLES:
            return action.userTeachables
        default: return state
    }
}
