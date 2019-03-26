import React, {Component} from 'react'

class Prediction extends Component {
  constructor(props) {
    super(props)
    this.evaluateMood = this.evaluateMood.bind(this)
    this.evalHelper = this.evalHelper.bind(this)
  }
  evalHelper(mood) {
    if (mood >= 0.7) {
      return 'high'
    } else if (mood < 0.7 && mood > 0.5) {
      return 'somewhat high'
    } else if (mood <= 0.5 && mood > 0.3) {
      return 'somewhat low'
    } else if (mood <= 0.3) {
      return 'low'
    } else {
      return 'moderate'
    }
  }
  // eslint-disable-next-line complexity
  evaluateMood() {
    let pLevel = this.evalHelper(this.props.pleasant)
    let eLevel = this.evalHelper(this.props.energy)
    let tLevel = this.evalHelper(this.props.tension)
    return {pLevel, eLevel, tLevel}
  }
  render() {
    const moods = this.evaluateMood()
    return (
      <div id="predictionBox">
        <h5>Today's Mood Prediction</h5>
        <div className="predictionText">
          It seems likely that you will experience {moods.pLevel} pleasantness,
          {moods.eLevel} energy, and {moods.tLevel} tension. What a day. You
          should pet a dog.
        </div>
      </div>
    )
  }
}

export default Prediction
