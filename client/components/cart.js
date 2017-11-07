import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchOrder } from '../store';
import { Link } from 'react-router-dom'

export class Cart extends Component {

  constructor(props){
    super(props);
    this.dateFormat = this.dateFormat.bind(this);
  }

  componentDidMount() {
    console.log("mounted!!!!!!!!!!!!!");
    this.props.loadOrder();
  }

  dateFormat(date) {
    var day = date.slice(0,10);
    var time = date.slice(11, 16);
    return day + ' ' +time;
  }

  render() {
    const { cart, handleSubmit/*, error*/ } = this.props;
    const shippingCost = 5.0;
    return (
      <div>
        <h3>Shopping Cart</h3>
        {(cart.transactions && Array.isArray(cart.transactions) && cart.transactions.length > 0) ?
          <form onSubmit={handleSubmit} name={name}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Tutor</th>
                  <th>Teachable</th>
                  <th>Date/Time</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/*The cart is an Order object, so each lineItem is a Transaction object.*/}
                {cart.transactions.map(lineItem => (
                  <tr key={lineItem.id}>
                    <td><img src={lineItem.tutor.img} className="lineItemImg" /></td>
                    <td>{lineItem.tutor.name}</td>
                    <td>{lineItem.teachable.name} ${lineItem.teachable.price}/hr</td>
                    <td>{this.dateFormat(lineItem.sessionTime)}</td>
                    <td>
                      <div>
                        <button type="button" className="duration-adjust duration-minus" handleClick={this.props.handleMinusClick}>-</button>
                        <input type="text" ref={"duration-select-display-" + lineItem.id} className="duration-select-display" size='2' pattern="[0-9]*"
                          defaultValue={lineItem.duration ? lineItem.duration : 0} min="0" />
                        <button type="button" className="duration-adjust duration-plus" handleClick={this.props.handlePlusClick}>+</button>
                      </div>
                    </td>
                    <td className="cart-row-total">${lineItem.cost}</td>
                    <td> <button type="button" className="remove-from-cart" handleClick={this.props.handleDeleteClick}>X</button> </td>
                  </tr>
                ))}
                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td>Subtotal</td>
                  <td className="cart-subtotal" id="cart-subtotal">
                    {cart.subtotal}</td>
                </tr>
                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td>Taxes</td>
                  <td id="cart-taxes">${cart.taxes}</td>
                </tr>
                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td>Shipping</td>
                  <td>${cart.shippingCost}</td>
                </tr>
                <tr>
                  <td></td><td></td><td></td><td></td>
                  <td>Grand Total</td>
                  <td name="grandTotal">${cart.grandTotal}</td>
                </tr>
              </tbody>
            </table>
            {/*error && error.response && <div> {error.response.data} </div>*/}
          </form>
          : <p>Your cart is empty! Why not go look at available <Link to="/tutors">Tutors</Link>?</p>}
      </div>
    )
  }
}

const mapState = (state) => {
  console.log("state",state);
  return {
    cart: state.orders/*,
      error*/
  }
}

const mapDispatch = (dispatch) => {
  console.log("LINE 100", dispatch)
  return {
    handleSubmit: (evt) => {
      evt.preventDefault()
      //const id = something? cookie.id?
      const cost = evt.target.grandTotal.innerHTML;
      //dispatch(submitOrder(id, cost))
    },
    loadOrder: () => {
      console.log("loading order", dispatch);
      dispatch(fetchOrder());
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Cart));
