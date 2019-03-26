import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import RenderPropsMenu from './menu-button'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="center-align moodmancer" id="poiretTitle">
      <h1 className="title">
        <img className="hat" src="wizard.png" width="100" height="100" />{' '}
        Moodmancer
      </h1>
    </div>
    <div className="center-align navblock">
      {isLoggedIn ? (
        <div className="navMargin textPink containerNav">
          {/* The navbar will show these links after you log in */}
          <ul className="link text poiret">
            <Link to="/about" className="link text">
              About
            </Link>
            <RenderPropsMenu />
            <Link to="/" className="MuiButton-root-1 link text">
              Account
            </Link>
            <Link to="/breathe" className="MuiButton-root-1 link text">
              Breathe
            </Link>
            <a
              className="MuiButton-root-1 link text"
              href="#"
              onClick={handleClick}
            >
            <Link to="/account" className="link text">
              Account
            </Link>
              Logout
            </a>
          </ul>
        </div>
      ) : (
        <div className="navMargin textPink containerNav">
          {/* The navbar will show these links before you log in */}
          <ul className="link text poiret">
            <Link to="/about" className="link text">
              About
            </Link>
            <RenderPropsMenu />
            <Link to="/breathe" className="link">
              Breathe
            </Link>
            <Link to="/account" className="link">
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
