import React, {Component} from 'react'
import {connect} from 'react-redux'
import Prediction from './prediction'

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
        <h2>Your Inputs</h2>
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
