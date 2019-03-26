import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllEntries} from '../store'
import {SingleDay, HistoryChart, HistorySummary} from './'

class UserHistory extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getEntries()
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
  allEntries: state.eveningEntry.allEntries
})

const mapDispatch = dispatch => ({
  getEntries: () => dispatch(getAllEntries())
})

export default connect(mapState, mapDispatch)(UserHistory)
