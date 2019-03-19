import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'

class EveningForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      journalEntry: ''
    }
    this.handleCheck = this.handleCheck.bind(this)
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
          Rate the tension in your day (for example, a lot of excitement is a
          pleasant kind of tension, and stress is an unpleasant kind of
          tension):
          {/* excitement is a postive tension. low energy high tension: dread. low pleasatness, high plesasantness: excited
        low energy low tension: calmness high pleasantness. tiredness/bored low pleasantness ) */}
          <p className="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
          Rate your general energy level today:
          <p className="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
          Can you journal in some thoughts?
          <input
            type="text"
            name="journalEntry"
            value={this.state.journalEntry}
            onChange={this.handleChange}
          />
          <button
            className="waves-effect waves-light btn-large"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default EveningForm
