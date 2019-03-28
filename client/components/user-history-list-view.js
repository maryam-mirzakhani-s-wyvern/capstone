import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import {SingleDay} from './'
import {setDayToView} from '../store'

class UserHistoryListView extends React.Component {
  constructor(props) {
    super(props)
    this.getAllTags = this.getAllTags.bind(this)
    this.selectDay = this.selectDay.bind(this)
  }

  getAllTags(entries) {
    const allTags = []
    entries.forEach(entry => allTags.push(entry.tags))
    return [...allTags]
  }

  selectDay(day) {
    this.props.setDay(day)
    this.forceUpdate()
  }

  render() {
    const {allEntries, dayToView, timeView} = this.props
    return (
      <div className="row">
        <div className="col s6">
          <h3>Time View: {timeView}</h3>
          {allEntries.map(entry => (
            <p key={entry.date}>
              <span>
                {moment(entry.date).format('dddd MMMM Do')}.{' '}
                {entry.tags && `Tags: ${entry.tags.toString()}`}
              </span>
              <button onClick={() => this.selectDay(entry)}>VIEW DAY</button>
            </p>
          ))}
        </div>
        {dayToView.date && <SingleDay dayToView={dayToView} />}
      </div>
    )
  }
}

const mapState = state => ({
  dayToView: state.history.dayToView
})
const mapDispatch = dispatch => ({
  setDay: day => dispatch(setDayToView(day))
})

export default connect(mapState, mapDispatch)(UserHistoryListView)
