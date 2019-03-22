import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'
import {connect} from 'react-redux'
import {postEveningEntry} from '../store'

class EveningForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitError: ''
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
    this.handleTags = this.handleTags.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkprops = this.checkprops.bind(this)
    this.handleJournal = this.handleJournal.bind(this)
  }

  checkprops() {
    const ourProps = this.props.entryToPost
    return (
      ourProps.sun &&
      ourProps.sleep &&
      ourProps.relax &&
      ourProps.exercise &&
      ourProps.meals &&
      ourProps.social &&
      ourProps.work &&
      ourProps.actualtension &&
      ourProps.actualpleasant &&
      ourProps.actualenergy
    )
  }

  handleCheck(event) {
    console.log('ENTRYTOPOST::', this.props.entryToPost)
    const name = event.target.name
    this.props.entryToPost[name] = event.target.value
  }

  handleSlider(event) {
    const name = event.target.name
    this.props.entryToPost[name] = event.target.value / 100
  }

  handleTags(event) {
    if (event.target.value.includes(',')) {
      this.props.entryToPost.tags = event.target.value.split(',')
    } else {
      this.props.entryToPost.tags = [event.target.value]
    }
  }

  handleJournal(event) {
    this.props.entryToPost.journal = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.checkprops()) {
      this.setState({submitError: ''})
      this.props.postEvening(this.props.entryToPost)
      this.props.history.push('/aftersubmit')
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

  render() {
    return (
      <div className="input-form">
        How many hours of sleep did you get?
        <RadioButtonsRow
          counterType="sleepHours"
          clickHandler={this.handleCheck}
          name="sleep"
        />
        How much did you socialize?
        <RadioButtonsRow
          counterType="usualCounter"
          clickHandler={this.handleCheck}
          name="social"
        />
        How many meals did you eat?
        <RadioButtonsRow
          counterType="mealCounter"
          clickHandler={this.handleCheck}
          name="meals"
        />
        Did you exercise?
        <RadioButtonsRow
          counterType="binaryCounter"
          clickHandler={this.handleCheck}
          name="exercise"
        />
        What is your outlook on work today (0 being worst to 5 being best)?
        <RadioButtonsRow
          counterType="counterFive"
          clickHandler={this.handleCheck}
          name="work"
        />
        How much did you relax today?
        <RadioButtonsRow
          counterType="usualCounter"
          clickHandler={this.handleCheck}
          name="relax"
        />
        How sunny was it today (0 being gloomy to 5 being sunniest)?
        <RadioButtonsRow
          counterType="counterFive"
          clickHandler={this.handleCheck}
          name="sun"
        />
        <form action="#">
          Rate the overall pleasantness of your day:
          <p className="range-field">
            <span>0</span>
            <span className="slider-right-label">100</span>
            <input
              name="actualpleasant"
              type="range"
              min="0"
              max="100"
              onChange={this.handleSlider}
            />
          </p>
          Rate the tension in your day (for example, excitement is a pleasant
          kind of tension, and stress is an unpleasant kind of tension):
          <p className="range-field">
            <span>0</span>
            <span className="slider-right-label">100</span>
            <input
              name="actualtension"
              type="range"
              min="0"
              max="100"
              onChange={this.handleSlider}
            />
          </p>
          Rate your general energy level today:
          <p className="range-field">
            <span>0</span>
            <span className="slider-right-label">100</span>
            <input
              name="actualenergy"
              type="range"
              min="0"
              max="100"
              onChange={this.handleSlider}
            />
          </p>
          Please enter some tag words and/or phrases separated by commas to
          describe your day. (You can use this feature to track habits and tasks
          that aren't already included in this form.)
          <input type="text" name="tagsEntry" onChange={this.handleTags} />
          Can you journal in some thoughts?
          <input
            type="text"
            name="journalEntry"
            onChange={this.handleJournal}
          />
          <span className="error">{this.state.submitError}</span>
          <p />
          <button
            className="waves-effect waves-light btn-large"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Enter my day
          </button>
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  entryToPost: state.eveningEntry.entryToPost
})

const mapDispatch = dispatch => ({
  postEvening: entryData => dispatch(postEveningEntry(entryData))
})

export default connect(mapState, mapDispatch)(EveningForm)
