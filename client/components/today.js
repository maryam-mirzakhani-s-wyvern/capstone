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
        <Prediction />
      </div>
    )
  }
}

const mapState = state => ({
  morningEntry: state.morningEntry.postedEntry
})

// const mapDispatch = (dispatch) => ({

// })

export default connect(mapState)(Today)

// export default Today
