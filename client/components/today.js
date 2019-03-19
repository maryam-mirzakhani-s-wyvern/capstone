import React, {Component} from 'react'
import {connect} from 'react-redux'
import Prediction from './prediction'
import InputSummary from './inputSummary'

class Today extends Component {
  constructor(props) {
    super(props)
    this.checkprops = this.checkprops.bind(this)
  }
  checkprops() {
    const ourProps = this.props.entryToPost
    return (
      ourProps.sun &&
      ourProps.sleep &&
      ourProps.relax &&
      ourProps.exercise &&
      ourProps.meals &&
      ourProps.social &&
      ourProps.work
    )
  }
  componentDidMount() {}

  render() {
    if (!this.checkprops()) {
      return (
        <div className="friendlyError">
          There's nothing to see here yet. Click "plan your day" in the navbar
          to plan your day!
        </div>
      )
    } else {
      return (
        <div>
          <h3>Your Plans for the Day</h3>
          <InputSummary input={this.props.entryToPost} />
          <Prediction
            tension={this.props.postedEntry.tension}
            pleasant={this.props.postedEntry.pleasant}
            energy={this.props.postedEntry.energy}
          />
        </div>
      )
    }
  }
}

const mapState = state => ({
  morningEntry: state.morningEntry,
  entryToPost: state.morningEntry.entryToPost,
  postedEntry: state.morningEntry.postedEntry
})

// const mapDispatch = (dispatch) => ({

// })

export default connect(mapState)(Today)

// export default Today
