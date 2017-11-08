import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, name, isLoggedIn } = props

  return (
    <div>
      {isLoggedIn && <h3> Welcome, {name}</h3>}
      {/*insert carousel and featured tutors and quickie form*/}

      <section id="carousel">
        <div id="carousel-text">
          <h1>TEACHABLES: </h1>
        </div>
        <img className="carousel-image" src='/images/home1.jpg' />

      </section>

    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    name: state.user.name,
    isLoggedIn: !!state.user.id
  }
}

export default withRouter(connect(mapState)(UserHome))

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
