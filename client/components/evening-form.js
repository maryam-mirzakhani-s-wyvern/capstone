import React, {Component} from 'react'
import RadioButtonsRow from './radio-buttons-row'

class EveningForm extends Component {
  constructor() {
    super()
    this.state = {
      counterTen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck() {}
  render() {
    return (
      <div>
        Rate the overall pleasantness of your day:
        <RadioButtonsRow
          counter={this.state.counterTen}
          handleClick={this.handleCheck}
        />
        Rate the tension in your day ( excitement is a postive tension. low
        energy high tension: dread. low pleasatness, high plesasantness: excited
        low energy low tension: calmness high pleasantness. tiredness/bored low
        pleasantness )?
        <RadioButtonsRow
          counter={this.state.counterTen}
          handleClick={this.handleCheck}
        />
        Rate your general energy level for today (low energy unpleasant: tired.
        high energy unpeasnt: anxious low energy pleasnat: calm. high energy
        pleasant: ecited)
        <RadioButtonsRow
          counter={this.state.counterTen}
          handleClick={this.handleCheck}
        />
        <form>
          <label htmlFor="feelings">Can you journal in some thoughts?</label>
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
