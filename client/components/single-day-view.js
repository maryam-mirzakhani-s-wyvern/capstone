import React from 'react'
import {Prediction, InputSummary, InputChart} from './'

export default function SingleDay(props) {
  return (
    <div>
      <h3>Day Summary: {props.entry.createdAt}</h3>
      <div className="col s6">
        <InputSummary input={props.entry} />
        <InputChart input={props.entry} />
      </div>
      <div className="col s6">
        <Prediction
          tension={props.entry.tension}
          pleasant={props.entry.pleasant}
          energy={props.entry.energy}
        />
      </div>
    </div>
  )
}
