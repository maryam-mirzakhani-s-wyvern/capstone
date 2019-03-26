import React from 'react'
import Switch from '@material-ui/core/Switch'
import {connect} from 'react-redux'
import {toggleCategory} from '../store'

class CategoryCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck() {
    console.log('THE CATEGORY:::', this.props.category)
    this.props.toggleCat(this.props.category)
  }
  render() {
    const {category, conditions} = this.props
    return (
      <Switch
        name={category}
        onChange={this.handleCheck}
        checked={conditions[category]}
      />
    )
  }
}

const mapState = state => ({
  conditions: state.history.displayChart
})

const mapDispatch = dispatch => ({
  toggleCat: category => dispatch(toggleCategory(category))
})

export default connect(mapState, mapDispatch)(CategoryCheckbox)
