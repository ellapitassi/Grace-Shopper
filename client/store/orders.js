import axios from 'axios'

//ACTION TYPES
const GET_ORDER = "GET_ORDER";
const POST_ORDER = "POST_ORDER";
const REMOVE_ORDER = "REMOVE_ORDER";
const ADD_TO_CART = 'ADD_TO_CART';

//INITIAL STATE
const defaultState = {}

//ACTION CREATORS
const getOrder = order => ({ type: GET_ORDER, order })
const postOrder = order => ({ type: POST_ORDER, order })
const removeOrder = order => ({ type: REMOVE_ORDER, order })
const addToCart = transaction => ({ type: ADD_TO_CART, order: transaction })

//THUNKS
export const fetchOrder = () =>
  dispatch =>
  {console.log("NERHERNSKJDFNSDFNSDKF", dispatch)
    axios.get(`/api/cart`)
      .then(res => {
        console.log("RES", res)
        console.log(dispatch)
        return dispatch(getOrder(res.data))
      })
      .catch(err => console.log(err))
    }


export const addToCartThunk = (transaction) =>
  dispatch =>
  {
      axios.put('/api/cart', transaction)
      .then(res => {
          console.log("CALLING ADD TO CART", res.data)
          dispatch(addToCart(res.data))
      })
      .catch(err => console.log(err))
  }


//REDUCER
export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_ORDER:
    console.log("actionorder")
      return action.order
    case POST_ORDER:
      return action.order
    case REMOVE_ORDER:
      return defaultState
    case ADD_TO_CART:
      return Object.assign({}, state, {order: action.transaction} )
    default:
      return state
  }
}
