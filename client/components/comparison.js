import React, {Component} from 'react'
import {connect} from 'react-redux'
import MoodRadialChart from './mood-radial-chart'
import {getAllEntries} from '../store/evening-entry'
import {join} from 'path'

class Comparison extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.getEveningEntries()
  }

  render() {
    const {eveningEntries} = this.props
    console.log('THIS PROPS', this.props)
    return (
      <div>
        {this.props.eveningEntries.id && this.props.eveningEntries.id ? (
          <MoodRadialChart
            tension={eveningEntries.actualtension}
            pleasant={eveningEntries.actualpleasant}
            energy={eveningEntries.actualenergy}
          />
        ) : (
          <div>Hello</div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  eveningEntries: state.eveningEntry.postedEntry
})

const mapDispatch = dispatch => ({
  getEveningEntries: () => dispatch(getAllEntries())
})

export default connect(mapState, mapDispatch)(Comparison)

// eveningEntries = {
//   actualenergy: 0.5
//   actualpleasant: 0.5
//   actualtension: 0.5
//   createdAt: "2019-03-25T23:07:25.292Z"
//   date: "2019-03-25"
//   exercise: false
//   id: 15
//   journal: null
//   meals: 2
//   relax: "Less than usual"
//   sleep: "6-8"
//   social: "Less than usual"
//   sun: 2
//   tags: null
//   updatedAt: "2019-03-25T23:07:25.292Z"
//   work: 2
// }
