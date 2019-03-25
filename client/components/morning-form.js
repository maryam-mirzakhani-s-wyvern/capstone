import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'
import {connect} from 'react-redux'
import {postMorningEntry} from '../store'
import AfterSubmit from './after-submit'

class PlanningForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitError: ''
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkprops = this.checkprops.bind(this)
  }
  checkprops() {
    const ourProps = this.props.entryToPost
    return (
      ourProps.sleep !== null &&
      ourProps.relax !== null &&
      ourProps.exercise !== null &&
      ourProps.meals !== null &&
      ourProps.social !== null &&
      ourProps.work !== null &&
      ourProps.sun !== null
    )
  }

  handleCheck(event) {
    const name = event.target.name
    this.props.entryToPost[name] = event.target.value
  }

  /*eslint-disable */
  handleSubmit() {
    if (this.checkprops()) {
      this.setState({submitError: ''})
      this.props.postMorningEntry(this.props.entryToPost)
      this.props.history.push('/today')
    } else {
      this.setState({
        submitError: 'The form is not complete.'
      })
      const ourProps = this.props.entryToPost
      if (!ourProps.sleep) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError + ' Please answer the question about sleep.'
          }
        })
      } else if (!ourProps.social) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError +
              ' Please answer the question about socializing.'
          }
        })
      } else if (!ourProps.meals) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError + ' Please answer the question about meals.'
          }
        })
      } else if (!ourProps.exercise) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError +
              ' Please answer the question about exercising.'
          }
        })
      } else if (!ourProps.work) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError + ' Please answer the question about work.'
          }
        })
      } else if (!ourProps.relax) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError +
              ' Please answer the question about relaxing.'
          }
        })
      } else if (!ourProps.sun) {
        this.setState(prevState => {
          return {
            submitError:
              prevState.submitError + ' Please answer the question about sun.'
          }
        })
      }
    }
  }
  /*eslint-enable */

  render() {
    return (
      <div className="container center-align">
        <div className="marginform">
          <h5>Sleep</h5>
          How many hours of sleep did you get last night?
          <RadioButtonsRow
            counterType="sleepHours"
            clickHandler={this.handleCheck}
            name="sleep"
          />
        </div>

        <div className="marginform">
          <h5>Social</h5>
          How much are you planning to socialize today?
          <RadioButtonsRow
            counterType="usualCounter"
            clickHandler={this.handleCheck}
            name="social"
          />
        </div>

        <div className="marginform">
          <h5>Meals</h5>
          How many meals are you planning to eat today?
          <RadioButtonsRow
            counterType="mealCounter"
            clickHandler={this.handleCheck}
            name="meals"
          />
        </div>

        <div className="marginform">
          <h5>Exercise</h5>
          Are you going to exercise?
          <RadioButtonsRow
            counterType="binaryCounter"
            clickHandler={this.handleCheck}
            name="exercise"
          />
        </div>

        <div className="marginform">
          <h5>Work</h5>
          What is your outlook on work today (0 being worst to 5 being best)?
          <RadioButtonsRow
            counterType="counterFive"
            clickHandler={this.handleCheck}
            name="work"
          />
        </div>

        <div className="marginform">
          <h5>Relax</h5>
          How much are you going to relax today?
          <RadioButtonsRow
            counterType="usualCounter"
            clickHandler={this.handleCheck}
            name="relax"
          />
        </div>

        <div className="marginform">
          <h5>Sunshine</h5>
          How sunny is it looking today (0 being gloomy to 5 being sunniest)?
          <RadioButtonsRow
            counterType="counterFive"
            clickHandler={this.handleCheck}
            name="sun"
          />
        </div>
        <span className="error">{this.state.submitError}</span>
        <p />

        <button
          type="submit"
          onClick={this.handleSubmit}
          className="waves-effect waves-light btn-large"
        >
          See my prediction
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  entryToPost: state.morningEntry.entryToPost,
  user: state.user
})

const mapDispatch = dispatch => ({
  postMorningEntry: entryData => dispatch(postMorningEntry(entryData))
})

export default connect(mapState, mapDispatch)(PlanningForm)
