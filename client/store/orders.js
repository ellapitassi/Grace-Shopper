import axios from 'axios'

//ACTION TYPES
const GET_ORDER = "GET_ORDER";
const POST_ORDER = "POST_ORDER";
const REMOVE_ORDER = "REMOVE_ORDER";

//INITIAL STATE
const defaultState = {}

//ACTION CREATORS
const getOrder = order => ({ type: GET_ORDER, order })
const postOrder = order => ({ type: POST_ORDER, order })
const removeOrder = order => ({ type: REMOVE_ORDER, order })

//THUNKS
export const fetchOrder = () =>
  dispatch =>
    axios.get(`api/cart/`)
      .then(res =>
        dispatch(getOrder(res.data)))
      .catch(err => console.log(err))

//REDUCER
export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    case POST_ORDER:
      return action.order
    case REMOVE_ORDER:
      return defaultState
    default:
      return state
  }
}
