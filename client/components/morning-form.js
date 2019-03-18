import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'
import {connect} from 'react-redux'
import {postMorningEntry} from '../store'

class PlanningForm extends Component {
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
    console.log('ENTRY::', this.props.entryToPost)
    this.props.postMorningEntry(this.props.entryToPost)
  }
  render() {
    return (
      <div>
        How many hours of sleep did you get last night?
        <RadioButtonsRow
          counterType="sleepHours"
          clickHandler={this.handleCheck}
          name="sleep"
        />
        How much are you planning to socialize today?
        <RadioButtonsRow
          counterType="usualCounter"
          clickHandler={this.handleCheck}
          name="social"
        />
        How many meals are you planning to eat today?
        <RadioButtonsRow
          counterType="mealCounter"
          clickHandler={this.handleCheck}
          name="meals"
        />
        Are you going to exercise?
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
        How much are you going to relax today?
        <RadioButtonsRow
          counterType="usualCounter"
          clickHandler={this.handleCheck}
          name="relax"
        />
        How sunny is it looking today (0 being gloomy to 5 being sunniest)?
        <RadioButtonsRow
          counterType="counterFive"
          clickHandler={this.handleCheck}
          name="sun"
        />
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
  entryToPost: state.morningEntry.entryToPost
})

const mapDispatch = dispatch => ({
  postMorningEntry: entryData => dispatch(postMorningEntry(entryData))
})

export default connect(mapState, mapDispatch)(PlanningForm)
