import React from 'react'
import {Prediction, InputSummary, InputChart} from './'
import moment from 'moment'

export default function SingleDay(props) {
  return (
    <div className="row">
      <h4>
        Day Summary: {moment(props.entry.createdAt).format('dddd MMM Do')}
      </h4>
      <div className="col s12 m6 l6">
        <InputSummary input={props.entry} />
        <InputChart input={props.entry} />
      </div>
      <div className="col s12 m6 l6">
        <Prediction
          tension={props.entry.tension}
          pleasant={props.entry.pleasant}
          energy={props.entry.energy}
        />
      </div>
    </div>
  )
}
