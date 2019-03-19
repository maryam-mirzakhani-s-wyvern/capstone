import React, {Component} from 'react'
import {connect} from 'react-redux'

class Prediction extends Component {
  render() {
    return (
      <div id="predictionBox">
        <h1>Today's Mood Prediction</h1>
        <div className="predictionText">
          Pleasantness: {this.props.pleasant}
          <p />
          Energy: {this.props.energy}
          <p />
          Tension: {this.props.tension}
        </div>
      </div>
    )
  }
}

// export default connect(mapState, mapDispatch)(Prediction)
export default Prediction
