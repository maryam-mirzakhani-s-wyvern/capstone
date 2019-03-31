import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import RenderPropsMenu from './menu-button'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="center-align moodmancer row" id="poiretTitle">
      <h1 className="title center-align col s12 m8 l12">
        <img className="hat" src="wizard.png" width="100" height="100" />{' '}
        Moodmancer
      </h1>
    </div>
    <div className="center-align navblock m9">
      {isLoggedIn ? (
        <div className="navMargin textPink containerNav">
          {/* The navbar will show these links after you log in */}
          <ul className="link text poiret">
            <Link to="/about" className="link text">
              About
            </Link>
            <RenderPropsMenu
              options={['Plan', 'View', 'Reflect']}
              paths={['/morningform', '/today', 'eveningform']}
              title="Your Day"
            />
            <Link to="/breathe" className="MuiButton-root-1 link text">
              Breathe
            </Link>
            <RenderPropsMenu
              options={['Account', 'History']}
              paths={['/account', '/history']}
              title="Account"
            />
            <a
              className="MuiButton-root-1 link text"
              href="#"
              onClick={handleClick}
            >
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
            <RenderPropsMenu
              options={['Plan', 'View', 'Reflect']}
              paths={['/morningform', '/today', 'eveningform']}
              title="Your Day"
            />
            <Link to="/breathe" className="link">
              Breathe
            </Link>
            <RenderPropsMenu
              options={['Login', 'Sign Up']}
              paths={['/login', '/signup']}
              title="Login/Signup"
            />
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
