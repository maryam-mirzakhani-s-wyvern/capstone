import React, {Component} from 'react'

class Prediction extends Component {
  constructor(props) {
    super(props)
    this.evaluateMood = this.evaluateMood.bind(this)
  }
  // eslint-disable-next-line complexity
  evaluateMood() {
    let pLevel = ''
    let eLevel = ''
    let tLevel = ''
    if (this.props.pleasant >= 0.7) {
      pLevel = 'high'
    } else if (this.props.pleasant < 0.7 && this.props.pleasant > 0.5) {
      pLevel = 'somewhat high'
    } else if (this.props.pleasant <= 0.5 && this.props.pleasant > 0.3) {
      pLevel = 'somewhat low'
    } else if (this.props.pleasant <= 0.3) {
      pLevel = 'low'
    } else {
      pLevel = 'moderate'
    }

    if (this.props.energy >= 0.7) {
      eLevel = 'high'
    } else if (this.props.energy < 0.7 && this.props.energy > 0.5) {
      eLevel = 'somewhat high'
    } else if (this.props.energy <= 0.5 && this.props.energy > 0.3) {
      eLevel = 'somewhat low'
    } else if (this.props.energy <= 0.4) {
      eLevel = 'low'
    } else {
      eLevel = 'moderate'
    }

    if (this.props.tension >= 0.7) {
      tLevel = 'high'
    } else if (this.props.tension < 0.7 && this.props.tension > 0.5) {
      tLevel = 'somewhat high'
    } else if (this.props.tension <= 0.5 && this.props.tension > 0.3) {
      tLevel = 'somewhat low'
    } else if (this.props.tension <= 0.4) {
      tLevel = 'low'
    } else {
      tLevel = 'moderate'
    }
    return {pLevel, eLevel, tLevel}
  }
  render() {
    const moods = this.evaluateMood()
    return (
      <div id="predictionBox">
        <h5>Today's Mood Prediction</h5>
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
