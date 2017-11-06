import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';

//ACTION TYPES
const GET_ALL_TUTORS = 'GET_ALL_TUTORS'
const ADD_TO_CART = 'ADD_TO_CART'

//INITIAL STATE
const initialState = {
    tutors: [
        {
        name: 'Guang Zhu',
        img: '/images/guang.jpg',
        email: 'bha.guang@gmail.com',
        password: 'abc123',
        rating: '5'
        }
    ]

}

//ACTION CREATORS
const getAllTutors = tutors => ({ type: GET_ALL_TUTORS, tutors })
//const addToCart = 

//THUNK CREATORS
export const fetchTutors = () =>
    dispatch =>
    {
        console.log('HASDLKFJADSJLFJKLASDKJLFASJKLFADSJKLFDSJKL')
        axios.get('/api/users')
            .then(res =>
                dispatch(getAllTutors(res.data || initialState)))
            .catch(err => console.log(err))
    }

//REDUCER
const allTutorsReducer = function(state = initialState, action){
    switch (action.type) {
        case GET_ALL_TUTORS:
            return Object.assign({}, state, {tutors: action.tutors});
    default: return state
    }
}

export default createStore(allTutorsReducer, applyMiddleware(thunkMiddleware, createLogger()))
