import React from 'react'
import Checkbox from './checkbox'

const EveningForm = props => {
  return (
    <div>
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={true}
              className="form-check-input"
            />
            Option 1
          </label>
        </div>
      </form>
      How pleasantness was your day?
      <div className="row">
        <div className="col s1">
          <label>
            <Checkbox
              name="0-2"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>0</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>1</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>2</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>3</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>4</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>5</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>6</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>7</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>8</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>9</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>10</span>
          </label>
        </div>
      </div>
      Rate the tension in your day ( excitement is a postive tension. low energy
      high tension: dread. low pleasatness, high plesasantness: excited low
      energy low tension: calmness high pleasantness. tiredness/bored low
      pleasantness )?
      <div className="row">
        <div className="col s1">
          <label>
            <Checkbox
              name="0-2"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>0</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>1</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>2</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>3</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>4</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>5</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>6</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>7</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>8</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>9</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>10</span>
          </label>
        </div>
      </div>
      Rate your general energy level for today (low energy unpleasant: tired.
      high energy unpeasnt: anxious low energy pleasnat: calm. high energy
      pleasant: ecited)
      <div className="row">
        <div className="col s1">
          <label>
            <Checkbox
              name="0-2"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>0</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>1</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>2</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>3</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>4</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>5</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>6</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>7</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>8</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>9</span>
          </label>
        </div>
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>10</span>
          </label>
        </div>
      </div>
      <form>
        <label htmlFor="feelings">Can you journal in some thoughts?</label>
        <input
          type="text"
          name="journalEntry"
          // value={this.state.journalEntry}
          // onChange={this.handleChange
        />
        <button
          className="waves-effect waves-light btn-large"
          type="button"
          // onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EveningForm
