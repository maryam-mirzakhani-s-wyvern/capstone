import React from 'react'

const RadioButtonsRow = props => {
  return (
    <div className="row">
      <form>
        {props.counter.map(num => (
          <div className="col s1" key={num}>
            <label>
              <input
                name="group1"
                type="radio"
                value={num}
                onClick={props.handleClick}
              />
              <span>{num}</span>
            </label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default RadioButtonsRow
