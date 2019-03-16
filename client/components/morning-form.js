import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'
import {connect} from 'react-redux'
import {postMorningEntry} from '../store'

class PlanningForm extends Component {
  constructor(props) {
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(event) {
    console.log('this triggered the handleCheck')
    this.props.currentMorningEntry[event.target.inputname] = event.target.value
  }
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
      </div>
    )
  }
}

const mapState = state => ({
  currentMorningEntry: state.morningEntry.currentMorningEntry
})

const mapDispatch = dispatch => ({
  editCurrent: entryData => dispatch(postMorningEntry(entryData))
})

export default connect(mapState, mapDispatch)(PlanningForm)
