import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {getAllEntries} from '../store'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props

  return (
    <div>
      <h3>Welcome, {user.name}</h3>
      <div className="row">
        <h4>Account information</h4>
        <p>
          <b>Name: </b>
          {user.name}
        </p>
        <p>
          <b>Email: </b>
          {user.email}
        </p>
      </div>
      <div className="row">
        <h4>History</h4>
        <p>
          <b>Member since: </b>
          {moment(user.createdAt).format('MMMM Do YYYY')}
        </p>
        <p>
          <Link to="/history">
            <b>View History </b>
          </Link>
        </p>
      </div>

      {/* <div className="row">
        <h4>Mantra and Goals</h4>
        <p>
          <b>Mantra: </b>Set a mantra here!
        </p>
        <p>
          <b>Goals: </b>Set some goals (?)
        </p>
      </div> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  fetchAllEntries: () => dispatch(getAllEntries())
})

export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
