import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' //This is weird; withRouter comes from react-router, not react-router-dom
import { withRouter } from 'react-router'
import store, { logout, fetchTutors, fetchteachables } from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */

const Main = (props) => {
  const { children, handleClick, isLoggedIn } = props
  console.log("children=====>", children)
  return (
    <div>
      <h1 align="center">Teachables</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/tutors">Tutors</Link>
        <div className="pull-right">
        {
          isLoggedIn
            ?
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/shoppingcart">Cart</Link>
              <a href="#" onClick={handleClick}>Logout</a>
            </div>
            :
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          }
          </div>
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
