import React from 'react'
import Prediction from './prediction'
import InputSummary from './inputSummary'

export default function SingleDay(props) {
  return (
    <div>
      <h3>Day Summary: {props.entry.createdAt}</h3>
      <InputSummary input={props.entry} />
      <Prediction
        tension={props.entry.tension}
        pleasant={props.entry.pleasant}
        energy={props.entry.energy}
      />
    </div>
  )
}
