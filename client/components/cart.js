import React from 'react';
import {connect} from 'react-redux'

const Cart = (props) => {
    const {cart, handleSubmit/*, error*/} = props
    const shippingCost = 5;
      return (
        <div>
        <h3>Shopping Cart</h3>
          <form onSubmit={handleSubmit} name={name}>
            <table>
                <thead>
                    <tr>
                        <th>Tutor</th>
                        <th>{/*img column*/}</th>
                        <th>Teachable</th>
                        <th>Date/Time</th>
                        <th>Duration</th>
                        <th>{/*cost column*/}</th>
                    </tr>
                </thead>
                <tbody>
                {/*The cart is an Order object, so each lineItem is a Transaction object.*/}
              {cart.map(lineItem => (
                <tr key={lineItem.id}>
                    <td>{lineItem.tutor.name}</td>
                    <td><img src={lineItem.tutor.img} className="lineItemImg" /></td>
                    <td>{lineItem.teachableId} ({lineItem.teachableCost})</td>
                    <td>{lineItem.sessionTime}</td>
                    <td>
                        <div>
                            <button type="button" className="duration-adjust duration-minus" handleClick={props.handleMinusClick}>-</button>
                            <input type="text" id="duration-select-display" className="duration-select-display" pattern="[0-9]*" 
                            defaultValue={lineItem.duration? lineItem.duration : 0} min="0" />
                            <button type="button" className="duration-adjust duration-plus" handleClick={props.handlePlusClick}>-</button>
                        </div>
                    </td>
                    <td className="cart-row-total">${lineItem.teachable.cost * document.getElementById("duration-select-display").value}</td>
                </tr>
              ))}
                </tbody>
                <tfooter>
                  <tr>
                    <td>Subtotal</td>
                    <td className="cart-subtotal" id="cart-subtotal">{document.getElementsByClassName("cart-row-total").reduce(function(total,element){
                      return total + element.innerHTML;
                    })}</td>
                  </tr>
                  <tr>
                    <td>Taxes</td>
                    <td id="cart-taxes">${document.getElementById("cart-subtotal").value*.07}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>${shippingCost}</td>
                  </tr>
                  <tr>
                    <td>Grand Total</td>
                    <td name="grandTotal">${document.getElementById("cart-subtotal").value+document.getElementById("cart-taxes").value+shippingCost}</td>
                  </tr>
                </tfooter>
            </table>
            {/*error && error.response && <div> {error.response.data} </div>*/}
          </form>
        </div>
      )
}

const mapState = (state) => {
    return {
      cart: state.cart/*,
      error*/
    }
  }
  
  const mapDispatch = (dispatch) => {
    return {
      handleSubmit (evt) {
        evt.preventDefault()
        //const id = something? cookie.id?
        const cost = evt.target.grandTotal.innerHTML;
        dispatch(submitOrder(id,cost))
      }
    }
  }

export const ShoppingCart = connect(mapState, mapDispatch)(Cart);