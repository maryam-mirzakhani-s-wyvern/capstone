import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserEveEntries, me, toggleCategory, setTimeView} from '../store'
import {TimeSelector, HistoryChart, HistorySummary} from './'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class UserHistoryChartView extends Component {
  constructor(props) {
    super(props)
    this.numerizeData = this.numerizeData.bind(this)
    this.bucketData = this.bucketData.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.filterTime = this.filterTime.bind(this)
    this.changeTimeView = this.changeTimeView.bind(this)
    this.sortByTime = this.sortByTime.bind(this)
  }

  async componentDidMount() {
    await this.props.getUser()
    await this.props.getEntries(this.props.userId)
  }

  handleSwitch(category) {
    this.props.toggleCat(category)
    this.forceUpdate()
  }

  render() {
    const {conditions, formattedEntries, chartColors, categories} = this.props
    return (
      <div>
        <h2>Your History:</h2>
        <TimeSelector changeTime={this.changeTimeView} />
        <div className="row">
          <HistoryChart
            formattedEntries={formattedEntries}
            conditions={conditions}
            categories={categories}
            chartColors={chartColors}
          />
          <HistorySummary
            formattedEntries={formattedEntries}
            handleSwitch={this.handleSwitch}
            conditions={conditions}
            categories={categories}
            chartColors={chartColors}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries,
  conditions: state.history.displayChart,
  timeView: state.history.timeView,
  userId: state.user.id,
  user: state.user
})

const mapDispatch = dispatch => ({
  toggleCat: category => dispatch(toggleCategory(category)),
  changeTimeView: view => dispatch(setTimeView(view)),
  getEntries: id => dispatch(getUserEveEntries(id)),
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(UserHistoryChartView)
