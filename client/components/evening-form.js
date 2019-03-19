import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'
import {connect} from 'react-redux'
import {postEveningEntry} from '../store'

class EveningForm extends Component {
  constructor(props) {
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleCheck(event) {
    const name = event.target.name
    this.props.entryToPost[name] = event.target.value
  }
  handleSubmit() {
    this.props.postEveningEntry(this.props.entryToPost)
  }
  handleCheck() {}
  render() {
    return (
      <div>
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
            <input type="range" id="test5" min="0" max="100" />
          </p>
          Rate the tension in your day (for example, excitement is a pleasant
          kind of tension, and stress is an unpleasant kind of tension):
          <p className="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
          Rate your general energy level today:
          <p className="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
          Can you journal in some thoughts?
          <input type="text" name="journalEntry" onChange={this.handleChange} />
          <button
            className="waves-effect waves-light btn-large"
            type="submit"
            onClick={this.handleSubmit}
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
  postEveningEntry: entryData => dispatch(postEveningEntry(entryData))
})

export default connect(mapState, mapDispatch)(EveningForm)
