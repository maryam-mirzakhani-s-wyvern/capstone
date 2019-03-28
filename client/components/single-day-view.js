import React from 'react'
import {InputChart, MoodRadialChart} from './'
import moment from 'moment'

class SingleDay extends React.Component {
  render() {
    const {dayToView} = this.props
    return (
      <div className="col s12 m6 l6">
        <h4>Currently viewing: {moment(dayToView.date).format('MMM Do')}</h4>
        <InputChart input={dayToView} />
        <MoodRadialChart
          tension={dayToView.actualtension}
          pleasant={dayToView.actualpleasant}
          energy={dayToView.actualenergy}
        />
      </div>
    )
  }
}

export default SingleDay
