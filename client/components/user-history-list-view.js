import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class UserHistoryListView extends React.Component {
  constructor(props) {
    super(props)
    this.getAllTags = this.getAllTags.bind(this)
  }

  getAllTags(entries) {
    const allTags = []
    entries.forEach(entry => allTags.push(entry.tags))
    return [...allTags]
  }

  render() {
    const {allEntries} = this.props
    return (
      <div className="row">
        {allEntries.map(entry => (
          <p key={entry.date}>
            <span>
              {moment(entry.date).format('dddd MMMM Do')}.{' '}
              {entry.tags && `Tags: ${entry.tags.toString()}`}
            </span>
            <Link to="singleday">
              <button>VIEW DAY</button>
            </Link>
          </p>
        ))}
      </div>
    )
  }
}

const mapDispatch = dispatch => ({})

export default UserHistoryListView
