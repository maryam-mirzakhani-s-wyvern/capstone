import React from 'react'

function sunPhrase(num) {
  switch (num) {
    case 0: {
      return 'The weather is looking gloomy today'
    }
    case 1: {
      return 'The weather is looking quite gloomy today'
    }
    case 2: {
      return "It's looking a bit cloudy today"
    }
    case 3: {
      return "It's looking partially sunny today"
    }
    case 4: {
      return "It's looking quite sunny today"
    }
    case 5: {
      return "It's looking very sunny today"
    }
    default: {
      return 'We have no information about the sun levels today'
    }
  }
}

function workPhrase(num) {
  switch (num) {
    case 0: {
      return "you're feeling horrible about your work."
    }
    case 1: {
      return "you're not feeling very optimistic about your work."
    }
    case 2: {
      return "you're feeling meh about your work."
    }
    case 3: {
      return "you're feeling fine about your work."
    }
    case 4: {
      return "you're feeling pretty optimistic about your work."
    }
    case 5: {
      return "you're feeling great about your work."
    }
    default: {
      return 'we have no information about your work.'
    }
  }
}

function InputSummary(props) {
  console.log(props.input)
  return (
    <div className="input-summary">
      <h5>Your Plans for the Day</h5>
      {props.input.sleep ? (
        <p>
          <b>In sum:</b> You got {props.input.sleep} hours of sleep last night.
          Your planned day involves {props.input.meals} meals and{' '}
          {props.input.exercise === 'No' ? 'no' : 'some'} exercise. You plan to
          relax{' '}
          {props.input.relax === 'Usual amount'
            ? 'your usual amount'
            : props.input.relax.toLowerCase()}{' '}
          and socialize{' '}
          {props.input.social === 'Usual amount'
            ? 'your usual amount'
            : props.input.social.toLowerCase()}. {sunPhrase(props.input.sun)},
          and {workPhrase(props.input.work)}
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default InputSummary
