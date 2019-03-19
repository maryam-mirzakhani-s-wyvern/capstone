import React, {Component} from 'react'
import {connect} from 'react-redux'

class Prediction extends Component {
  constructor(props) {
    super(props)
    this.evaluateMood = this.evaluateMood.bind(this)
  }
  evaluateMood() {
    let pLevel = ''
    let eLevel = ''
    let tLevel = ''
    if (this.props.pleasant >= 0.6) {
      pLevel = 'high'
    } else {
      pLevel = 'low'
    }

    if (this.props.energy >= 0.6) {
      eLevel = 'high'
    } else {
      eLevel = 'low'
    }

    if (this.props.tension >= 0.6) {
      tLevel = 'high'
    } else {
      tLevel = 'low'
    }
    return {pLevel, eLevel, tLevel}
  }
  render() {
    const moods = this.evaluateMood()
    return (
      <div id="predictionBox">
        <h3>Today's Mood Prediction</h3>
        <div className="predictionText">
          It seems likely that you will experience {moods.pLevel} pleasantness,{' '}
          {moods.eLevel} energy, and {moods.tLevel} tension. What a day. You
          should pet a dog.
        </div>
      </div>
    )
  }
}

// export default connect(mapState, mapDispatch)(Prediction)
export default Prediction
