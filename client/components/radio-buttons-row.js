import React from 'react'

const RadioButtonsRow = props => {
  const counter = {
    counterTen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    counterFive: [0, 1, 2, 3, 4, 5],
    mealCounter: [0, 1, 2, 3, 4],
    binaryCounter: ['Yes', 'No'],
    usualCounter: [
      'Not at all',
      'Less than usual',
      'Usual amount',
      'More than usual'
    ],
    sleepHours: ['0-2', '2-4', '4-6', '6-8', '8+']
  }
  return (
    <div className="row">
      <form>
        {counter[props.counterType].map(num => (
          <div className="col s1" key={num}>
            <label>
              <input
                name={props.name}
                type="radio"
                value={num}
                onClick={props.clickHandler}
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
