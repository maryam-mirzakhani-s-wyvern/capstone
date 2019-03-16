import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'

class PlanningForm extends Component {
  constructor() {
    super()
    this.state = {
      counterTen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      counterFive: [0, 1, 2, 3, 4, 5],
      mealCounter: [0, 1, 2, 3, 4],
      binaryCounter: ['Yes', 'No'],
      usualCounter: [
        'Not at all',
        'Less than usual',
        'The usual amount',
        'More than usual'
      ],
      sleepHours: ['0-2', '2-4', '4-6', '6-8', '8+']
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck() {}
  render() {
    return (
      <div>
        How many hours of sleep did you get?
        <RadioButtonsRow
          counter={this.state.sleepHours}
          handleClick={this.handleCheck}
        />
        How much did you socialize?
        <RadioButtonsRow
          counter={this.state.usualCounter}
          handleClick={this.handleCheck}
        />
        How many meals did you eat?
        <RadioButtonsRow
          counter={this.state.mealCounter}
          handleClick={this.handleCheck}
        />
        Did you exercise?
        <RadioButtonsRow
          counter={this.state.binaryCounter}
          handleClick={this.handleCheck}
        />
        What is your outlook on work today (0 being worst to 5 being best)?
        <RadioButtonsRow
          counter={this.state.counterFive}
          handleClick={this.handleCheck}
        />
        How much did you relax today?
        <RadioButtonsRow
          counter={this.state.usualCounter}
          handleClick={this.handleCheck}
        />
        How sunny was it today (0 being gloomy to 5 being sunniest)?
        <RadioButtonsRow
          counter={this.state.counterFive}
          handleClick={this.handleCheck}
        />
      </div>
    )
  }
}

export default PlanningForm
