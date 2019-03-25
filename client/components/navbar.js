import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import RenderPropsMenu from './menu-button'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 className="center-align textPink" id="poiretTitle">
      Moodmancer
    </h1>
    <div className="center-align">
      {isLoggedIn ? (
        <div className="navMargin">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <RenderPropsMenu />
          <Link to="/breathe">Breathe</Link>
          <Link to="/">Account</Link>

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navMargin textPink containerNav">
          {/* The navbar will show these links before you log in */}
          <ul className="link text poiret">
            <Link to="/home" className="link text">
              Home
            </Link>
            <RenderPropsMenu />
            <Link to="/breathe" className="link">
              Breathe
            </Link>
            <Link to="/" className="link">
              Account
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </ul>
        </div>
      )}
      {/* </nav> */}
    </div>
    {/* <hr /> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
