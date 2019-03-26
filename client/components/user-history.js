import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserEveEntries, me} from '../store'
import {SingleDay, HistoryChart, HistorySummary} from './'

class UserHistory extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.getUser()
    await this.props.getEntries(this.props.userId)
  }

  render() {
    const {allEntries} = this.props
    return (
      <div className="row">
        <HistoryChart allEntries={allEntries} className="col s6" />
        <HistorySummary />
        {/* <ul>
          {allEntries.map(entry => <SingleDay key={entry.id} entry={entry} />)}
        </ul> */}
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries,
  userId: state.user.id
})

const mapDispatch = dispatch => ({
  getEntries: id => dispatch(getUserEveEntries(id)),
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(UserHistory)
