import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES
const GET_ALL_TUTORS = 'GET_ALL_TUTORS'

//INITIAL STATE
const initialState = []
    //     {
    //     name: 'Guang Zhu',
    //     img: '/images/guang.jpg',
    //     email: 'bha.guang@gmail.com',
    //     password: 'abc123',
    //     rating: '5'
    //     }

//ACTION CREATORS
const getAllTutors = tutors => ({ type: GET_ALL_TUTORS, tutors: tutors })

//THUNK CREATORS
export const fetchTutors = () =>
    dispatch =>
    {
        axios.get('/api/users')
            .then(res => 
                dispatch(getAllTutors(res.data || initialState)))
            .catch(err => console.log(err))
    }

//REDUCER
export default function(state = initialState, action){
    switch (action.type) {
        case GET_ALL_TUTORS:
            return action.tutors //Object.assign({}, state, {tutors: action.tutors});
    default: return state
    }
}
