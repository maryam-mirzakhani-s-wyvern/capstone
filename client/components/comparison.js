import React, {Component} from 'react'
import {connect} from 'react-redux'
import MoodRadialChart from './mood-radial-chart'
import {fetchThisMorning} from '../store/morning-entry'
import {fetchThisEvening} from '../store/evening-entry'

class Comparison extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMorning()
    this.props.fetchEvening()
  }

  render() {
    console.log('comparison Props', this.props)
    const {morningEntries, eveningEntries} = this.props
    return (
      <div className="row center-align">
        <div className="col s6">
          <h4 className="poiret underline">Morning</h4>
          {this.props.morningEntries.id && this.props.morningEntries.id ? (
            <MoodRadialChart
              tension={morningEntries.tension}
              pleasant={morningEntries.pleasant}
              energy={morningEntries.energy}
            />
          ) : (
            <div>Nothing to see here!</div>
          )}
        </div>

        <div className="col s6">
          <h4 className="poiret underline">Evening</h4>
          {this.props.eveningEntries.id && this.props.eveningEntries.id ? (
            <MoodRadialChart
              tension={eveningEntries.actualtension}
              pleasant={eveningEntries.actualpleasant}
              energy={eveningEntries.actualenergy}
            />
          ) : (
            <div>Nothing to see here!</div>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  eveningEntries: state.eveningEntry.postedEntry,
  morningEntries: state.morningEntry.postedEntry
})

const mapDispatch = dispatch => ({
  fetchMorning: () => dispatch(fetchThisMorning()),
  fetchEvening: () => dispatch(fetchThisEvening())
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
