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
    const userId = this.props.eveningEntries.userId
    this.props.fetchEvening(userId)
    this.props.fetchMorning()
  }

  render() {
    const {morningEntries, eveningEntries} = this.props
    console.log('comparison Props', this.props)
    console.log('USERID', this.props.eveningEntries.userId)
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
