import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getUserEveEntries,
  me,
  toggleCategory,
  setTimeView,
  displayListView
} from '../store'
import {
  TimeSelector,
  UserHistoryChartView,
  UserHistoryListView,
  ViewSelector
} from './'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class UserHistory extends Component {
  constructor(props) {
    super(props)
    this.numerizeData = this.numerizeData.bind(this)
    this.bucketData = this.bucketData.bind(this)
    this.filterTime = this.filterTime.bind(this)
    this.changeTimeView = this.changeTimeView.bind(this)
    this.sortByTime = this.sortByTime.bind(this)
    this.displayListView = this.displayListView.bind(this)
  }

  async componentDidMount() {
    await this.props.getUser()
    await this.props.getEntries(this.props.userId)
  }

  numerizeData(data) {
    return data.map(entry => {
      const numEntry = jsonToBrainData(entry)
      numEntry.date = entry.date
      numEntry.energy = entry.actualenergy
      numEntry.pleasant = entry.actualpleasant
      numEntry.tension = entry.actualtension
      return numEntry
    })
  }

  bucketData(data) {
    const buckets = {
      pleasant: [],
      energy: [],
      tension: [],
      social: [],
      sleep: [],
      meals: [],
      exercise: [],
      work: [],
      relax: [],
      sun: [],
      date: []
    }

    data.forEach(obj => {
      for (let key in buckets) {
        buckets[key].push(obj[key])
      }
    })
    return buckets
  }

  sortByTime(entries) {
    return entries.sort((entryA, entryB) => {
      const dateA = new Date(entryA.date)
      const dateB = new Date(entryB.date)
      return dateB - dateA
    })
  }

  filterTime(entries, timeView) {
    if (timeView === 'all history') return entries
    if (timeView === 'last week') return entries.slice(0, 7)
    if (timeView === 'last month') return entries.slice(0, 30)
  }

  changeTimeView(view) {
    this.props.changeTimeView(view)
  }

  displayListView(bool) {
    this.props.displayListView(bool)
  }

  filterTime(entries, timeView) {
    if (timeView === 'all history') return entries
    if (timeView === 'last week') return entries.slice(0, 7)
    if (timeView === 'last month') return entries.slice(0, 30)
  }

  render() {
    const {allEntries, conditions, timeView, listView} = this.props
    const sortedEntries = this.sortByTime(allEntries)
    const entriesToView = this.filterTime(sortedEntries, timeView)
    const numerized = this.numerizeData(entriesToView)
    const formatted = this.bucketData(numerized)
    const categories = Object.keys(formatted)
    const chartColors = {
      tension: 'turquoise',
      energy: 'orchid',
      pleasant: 'yellowGreen',
      sleep: 'darkViolet',
      social: 'darkGreen',
      meals: 'darkBlue',
      exercise: 'lightSkyBlue',
      relax: 'grey',
      work: 'purple',
      sun: 'orange'
    }
    return (
      <div>
        <h2>Your History:</h2>
        <TimeSelector changeTime={this.changeTimeView} />
        <ViewSelector displayListView={this.displayListView} />
        {listView ? (
          <UserHistoryListView allEntries={entriesToView} timeView={timeView} />
        ) : (
          <UserHistoryChartView
            formattedEntries={formatted}
            handleSwitch={this.handleSwitch}
            conditions={conditions}
            categories={categories}
            chartColors={chartColors}
          />
        )}
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries,
  conditions: state.history.displayChart,
  timeView: state.history.timeView,
  userId: state.user.id,
  user: state.user,
  listView: state.history.listView
})

const mapDispatch = dispatch => ({
  toggleCat: category => dispatch(toggleCategory(category)),
  changeTimeView: view => dispatch(setTimeView(view)),
  getEntries: id => dispatch(getUserEveEntries(id)),
  getUser: () => dispatch(me()),
  displayListView: bool => dispatch(displayListView(bool))
})

export default connect(mapState, mapDispatch)(UserHistory)
