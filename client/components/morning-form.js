import React from 'react'
import Checkbox from './checkbox'

const Form = props => {
  return (
    <div>
      How many hours of sleep did you get?
      <div className="row">
        <div className="col s2">
          <label>
            <Checkbox
              name="0-2"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>0-2</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>2-4</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="4-6"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>4-6</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>6-8</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>8+</span>
          </label>
        </div>
      </div>
      How much did you socialize?
      <div className="row">
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>More than usual</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Usual amount</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Less than usual</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Not at all</span>
          </label>
        </div>
      </div>
      How many meals did you eat?
      <div className="row">
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
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
            <span>4+</span>
          </label>
        </div>
      </div>
      Did you exercise?
      <div className="row">
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Yes</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>No</span>
          </label>
        </div>
      </div>
      What is your outlook on work today (0 being worst to 5 being best)?
      <div className="row">
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
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
      </div>
      How much relaxation time did you have?
      <div className="row">
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>More than usual</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Usual amount</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Less than usual</span>
          </label>
        </div>
        <div className="col s2">
          <label>
            <Checkbox
              name="2-4"
              // value={props.value[1]}
              // handleCheck={props.handleCheck}
            />
            <span>Not at all</span>
          </label>
        </div>
      </div>
      How sunny was it today (0 being gloomy to 5 being sunniest)?
      <div className="row">
        <div className="col s1">
          <label>
            <Checkbox
              name="2-4"
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
      </div>
    </div>
  )
}

export default Form
