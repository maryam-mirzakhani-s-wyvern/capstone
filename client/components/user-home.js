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
  const dateJoined = moment(user.createdAt).format('MMMM Do YYYY')

  return (
    <div>
      <h3>Welcome, {user.email}</h3>
      <div id="account-info">
        <p>
          <b>Member since: </b>
          {dateJoined}
        </p>
        <p>
          <Link to="/history">
            <b>View History </b>
          </Link>
        </p>
      </div>
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
