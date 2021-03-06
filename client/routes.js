import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  MorningForm,
  EveningForm,
  Today,
  AfterSubmit,
  UserHistory,
  MoodRadialChart,
  SingleDay,
  BreatheBlock,
  Comparison,
  About,
  NotFound
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/morningform" component={MorningForm} />
        <Route exact path="/eveningform" component={EveningForm} />
        <Route exact path="/today" component={Today} />
        <Route exact path="/aftersubmit" component={AfterSubmit} />
        <Route exact path="/moodchart" component={MoodRadialChart} />
        <Route exact path="/singleday" component={SingleDay} />
        <Route exact path="/breathe" component={BreatheBlock} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={About} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/account" component={UserHome} />
            <Route exact path="/comparison" component={Comparison} />
            <Route exact path="/history" component={UserHistory} />
            <Route exact path="/" component={About} />
            <Route component={NotFound} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={NotFound} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
