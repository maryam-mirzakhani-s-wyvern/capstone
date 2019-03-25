import React from 'react'
import Prediction from './prediction'
import InputSummary from './inputSummary'
import moment from 'moment'

export default function SingleDay(props) {
  return (
    <div>
      <h4>
        Day Summary: {moment(props.entry.createdAt).format('dddd MMM Do')}
      </h4>
      <InputSummary input={props.entry} />
      <Prediction
        tension={props.entry.tension}
        pleasant={props.entry.pleasant}
        energy={props.entry.energy}
      />
    </div>
  )
}
