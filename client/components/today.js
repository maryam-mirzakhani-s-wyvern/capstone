import React, {Component} from 'react'
import {connect} from 'react-redux'
import Prediction from './prediction'
import InputSummary from './inputSummary'
import Recommendation from './recommendation'
import {fetchThisMorning, me} from '../store'

class Today extends Component {
  constructor(props) {
    super(props)
    this.checkprops = this.checkprops.bind(this)
  }
  checkprops() {
    const ourProps = this.props.postedEntry
    return (
      ourProps.sun &&
      ourProps.sleep &&
      ourProps.relax &&
      ourProps.exercise !== null &&
      ourProps.meals &&
      ourProps.social &&
      ourProps.work
    )
  }

  render() {
    const {postedEntry, loggedInUser, fetchMorning} = this.props
    if (loggedInUser.id) {
      fetchMorning()
    }
    if (!this.checkprops()) {
      return (
        <div className="friendlyError">
          There's nothing to see here yet. Click "plan your day" in the navbar
          to plan your day!
        </div>
      )
    } else {
      return (
        <div>
          <InputSummary input={postedEntry} />
          <Prediction
            tension={postedEntry.tension}
            pleasant={postedEntry.pleasant}
            energy={postedEntry.energy}
          />
          <Recommendation postedEntry={postedEntry} />
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
