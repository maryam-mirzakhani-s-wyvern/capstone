import React, {Component} from 'react'
import {connect} from 'react-redux'
import Prediction from './prediction'
import InputSummary from './inputSummary'

class Today extends Component {
  // constructor(props) {
  //   super(props) {

  //   }
  // }

  componentDidMount() {}

  render() {
    console.log('morning entry', this.props.morningEntry)
    return (
      <div>
        Today
        <h1>Your Plans for the Day</h1>
        <InputSummary input={this.props.entryToPost} />
        <Prediction />
      </div>
    )
  }
}

const mapState = state => ({
  morningEntry: state.morningEntry,
  entryToPost: state.morningEntry.entryToPost
})

// const mapDispatch = (dispatch) => ({

// })

export default connect(mapState)(Today)

// export default Today
