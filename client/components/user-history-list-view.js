import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

class UserHistoryListView extends React.Component {
  render() {
    const {allEntries} = this.props
    return (
      <div className="row">
        {allEntries.map(entry => (
          <p>See {moment(entry.date).format('dddd MMMM Do')}</p>
        ))}
      </div>
    )
  }
}

export default UserHistoryListView
