import React, {Component} from 'react'

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
    const radioButtonsRow = (
      <div className="row">
        <form>
          {this.state.counterTen.map(num => (
            <div className="col s1" key={num}>
              <label>
                <input
                  name="group1"
                  type="radio"
                  value={num}
                  onClick={this.handleCheck}
                />
                <span>{num}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    )

    return (
      <div>
        Rate the overall pleasantness of your day:
        {radioButtonsRow}
        Rate the tension in your day ( excitement is a postive tension. low
        energy high tension: dread. low pleasatness, high plesasantness: excited
        low energy low tension: calmness high pleasantness. tiredness/bored low
        pleasantness )?
        {radioButtonsRow}
        Rate your general energy level for today (low energy unpleasant: tired.
        high energy unpeasnt: anxious low energy pleasnat: calm. high energy
        pleasant: ecited)
        {radioButtonsRow}
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
