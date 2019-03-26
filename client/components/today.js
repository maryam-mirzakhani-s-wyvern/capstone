import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Prediction,
  InputChart,
  InputSummary,
  Recommendation,
  MoodRadialChart
} from './'
import {fetchThisMorning, me} from '../store'

class Today extends Component {
  constructor(props) {
    super(props)
    this.checkprops = this.checkprops.bind(this)
  }

  checkprops() {
    const ourProps = this.props.postedEntry
    return (
      ourProps.sleep &&
      ourProps.relax !== null &&
      ourProps.exercise !== null &&
      ourProps.meals !== null &&
      ourProps.social &&
      ourProps.work !== null &&
      ourProps.sun !== null
    )
  }

  componentDidMount() {
    this.props.fetchMorning()
  }

  render() {
    const {postedEntry} = this.props
    if (!this.checkprops()) {
      return (
        <div className="friendlyError">
          There's nothing to see here yet. Click "plan your day" in the navbar
          to plan your day!
        </div>
      )
    } else {
      return (
        <div className="center-align">
          <div className="col s6">
            <InputSummary input={postedEntry} />
            <InputChart input={postedEntry} />
            <Prediction
              tension={postedEntry.tension}
              pleasant={postedEntry.pleasant}
              energy={postedEntry.energy}
            />
            <Recommendation postedEntry={postedEntry} />
          </div>
          <div className="col s6">
            <MoodRadialChart
              tension={postedEntry.tension}
              pleasant={postedEntry.pleasant}
              energy={postedEntry.energy}
            />
          </div>
        </div>
      )
    }
  }
}

const mapState = state => ({
  loggedInUser: state.user,
  postedEntry: state.morningEntry.postedEntry
})

const mapDispatch = dispatch => ({
  fetchUser: () => me(),
  fetchMorning: () => dispatch(fetchThisMorning())
})

export default connect(mapState, mapDispatch)(Today)
