import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchOrder } from '../store';

export class Cart extends Component {

  constructor(props){
    super(props);
    this.state = {
      durationSelectDisplay: 0,
      cartSubtotal: 0,
      cartTaxes: 0
    }
    this.cartRowTotal = this.cartRowTotal.bind(this);
    this.dateFormat = this.dateFormat.bind(this);
  }

  componentDidMount() {
    console.log("mounted!!!!!!!!!!!!!");
    this.props.loadOrder();
  }

  cartRowTotal() {
    var crt = document.getElementsByClassName("cart-row-total");
    if (crt) crt.reduce(function (total, element) {
      return total + element.innerHTML;
    }) 
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
        <form onSubmit={handleSubmit} name={name}>
          <table>
            <thead>
              <tr>
                <th>Tutor</th>
                <th></th>
                <th>Teachable</th>
                <th>Date/Time</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/*The cart is an Order object, so each lineItem is a Transaction object.*/}
              {cart && Array.isArray(cart) && cart.length>0 && cart.map(lineItem => (
                <tr key={lineItem.id}>
                  <td>{lineItem.tutor.name}</td>
                  <td><img src={lineItem.tutor.img} className="lineItemImg" /></td>
                  <td>{lineItem.teachable.name} ${lineItem.teachable.price}/hr</td>
                  <td>{this.dateFormat(lineItem.sessionTime)}</td>
                  <td>
                    <div>
                      <button type="button" className="duration-adjust duration-minus" handleClick={this.props.handleMinusClick}>-</button>
                      <input type="text" ref={"duration-select-display-"+lineItem.id} className="duration-select-display" pattern="[0-9]*"
                        defaultValue={lineItem.duration ? lineItem.duration : 0} min="0" />
                      <button type="button" className="duration-adjust duration-plus" handleClick={this.props.handlePlusClick}>-</button>
                    </div>
                  </td>
                  <td className="cart-row-total">${/*lineItem.teachable.cost **/ console.log("SDSDFSFSDF", this.refs["duration-select-display-"+lineItem.id])}</td>
                </tr>
              ))}
              <tr>
                <td></td><td></td><td></td><td></td>
                <td>Subtotal</td>
                <td className="cart-subtotal" id="cart-subtotal">
                  {this.cartRowTotal}</td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td>
                <td>Taxes</td>
                <td id="cart-taxes">${/*document.getElementById("cart-subtotal")? document.getElementById("cart-subtotal").value * 0.07 : "0.00"*/}</td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td>
                <td>Shipping</td>
                <td>${shippingCost}</td>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td>
                <td>Grand Total</td>
                <td name="grandTotal">${/*
                  (document.getElementById("cart-subtotal") && document.getElementById("cart-taxes")) ?
                    parseFloat(document.getElementById("cart-subtotal").value) + parseFloat(document.getElementById("cart-taxes").value) + shippingCost
                    : "0.00"
                */}</td>
              </tr>
              </tbody>
          </table>
          {/*error && error.response && <div> {error.response.data} </div>*/}
        </form>
      </div>
    )
  }
}

const mapState = (state) => {
  console.log("state",state);
  return {
    cart: state.orders.transactions/*,
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
