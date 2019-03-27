import React from 'react'
import {InputChart, MoodRadialChart} from './'
import moment from 'moment'
import {connect} from 'react-redux'

class SingleDay extends React.Component {
  render() {
    const {dayToView} = this.props
    return (
      <div className="row">
        <h4>Day Summary: {moment(dayToView.date).format('MMM Do')}</h4>
        <div className="col s6">
          <InputChart input={dayToView} />
        </div>
        <div className="col s6">
          <MoodRadialChart
            tension={dayToView.actualtension}
            pleasant={dayToView.actualpleasant}
            energy={dayToView.actualenergy}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  currentDay: state.history.dayToView
})

export default SingleDay
