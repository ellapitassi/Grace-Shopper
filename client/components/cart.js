import React from 'react';
import {connect} from 'react-redux'

const Cart = (props) => {
    const {name, displayName, handleSubmit, error} = props
    
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
              {cookie.map(lineItem => {
                <tr>
                    <td>{lineItem.name}</td>
                    <td><img src={lineItem.img} className="lineItemImg" /></td>
                    <td>{lineItem.teachable} ({lineItem.teachableCost})</td>
                    <td>{lineItem.dateTime}</td>
                    <td>
                        <div>
                            <button type="button" className="duration-adjust duration-minus" handleClick={props.handleMinusClick}>-</button>
                            <input type="text" id="duration-select-display" className="duration-select-display" pattern="[0-9]*" defaultValue="1" min="0"></input>
                            <button type="button" className="duration-adjust duration-plus" handleClick={props.handlePlusClick}>-</button>
                        </div>
                    </td>
                    <td>${lineItem.teachableCost * document.getElementById("duration-select-display").value}</td>
                </tr>
              })
                }
                </tbody>
                <tfooter>

                <tfooter>
            </table>
            <div>
              <label htmlFor="password"><small>Password</small></label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">Place your order</button>{/*wording for final checkout button*/}
            </div>
            {/*error && error.response && <div> {error.response.data} </div>*/}
          </form>
        </div>
      )
}

const mapState = (state) => {
    return {
      
    }
  }
  
  const mapDispatch = (dispatch) => {
    return {
      handleSubmit (evt) {
        evt.preventDefault()
        const formName = evt.target.name
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(auth(email, password, formName))
      }
    }
  }

export const ShoppingCart = connect(mapState, mapDispatch)(Cart);