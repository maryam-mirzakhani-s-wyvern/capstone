import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserEveEntries, me} from '../store'
import {SingleDay, HistoryChart, HistorySummary} from './'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class UserHistory extends Component {
  constructor(props) {
    super(props)
    this.numerizeData = this.numerizeData.bind(this)
    this.bucketData = this.bucketData.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  async componentDidMount() {
    await this.props.getUser()
    await this.props.getEntries(this.props.userId)
  }

  numerizeData(data) {
    return data.map(entry => {
      const numEntry = jsonToBrainData(entry)
      numEntry.date = entry.date
      return numEntry
    })
  }

  bucketData(data) {
    const buckets = {
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

  handleSwitch(category) {
    this.props.toggleCat(category)
    this.forceUpdate()
  }

  render() {
    const {allEntries, conditions} = this.props
    const numerized = this.numerizeData(allEntries)
    const formatted = this.bucketData(numerized)
    const categories = Object.keys(formatted)

    const chartColors = {
      sleep: 'brown',
      social: 'darkGreen',
      meals: 'turquoise',
      exercise: 'royalBlue',
      relax: 'grey',
      work: 'purple',
      sun: 'orange'
    }
    return (
      <div>
        <h2>Your History:</h2>
        <div className="row">
          <HistoryChart
            formattedEntries={formatted}
            conditions={conditions}
            categories={categories}
            chartColors={chartColors}
          />
          <HistorySummary
            formattedEntries={formatted}
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
  userId: state.user.id,
  user: state.user
})

const mapDispatch = dispatch => ({
  getEntries: id => dispatch(getUserEveEntries(id)),
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(UserHistory)
