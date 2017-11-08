import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES
const GET_ALL_TUTORS = 'GET_ALL_TUTORS'
const GET_TUTOR_INFO = 'GET_TUTOR_INFO'

//INITIAL STATE
const initialState = []

//ACTION CREATORS
const getAllTutors = tutors => ({ type: GET_ALL_TUTORS, tutors: tutors })
const getTutorInfo = tutor => ({ type: GET_TUTOR_INFO, tutor: tutor })

//THUNK CREATORS
export const fetchTutors = () =>
    dispatch =>
    {
        axios.get('/api/users')
            .then(res => 
                dispatch(getAllTutors(res.data || initialState)))
            .catch(err => console.log(err))
    }

export const tutorInfo = (tutorId) => 
    dispatch =>
    {
        axios.get(`/api/users/${tutorId}`)
        .then(res => {
            dispatch(getTutorInfo(res.data))
        })
        .catch(err => console.log(err))
    }

//REDUCER
export default function(state = initialState, action){
    switch (action.type) {
        case GET_ALL_TUTORS:
            return action.tutors //Object.assign({}, state, {tutors: action.tutors});
        case GET_TUTOR_INFO:
            return action.tutor
    default: return state
    }
}
