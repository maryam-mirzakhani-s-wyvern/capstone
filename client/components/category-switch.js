import React from 'react'
import Switch from '@material-ui/core/Switch'
import {connect} from 'react-redux'
import {toggleCategory} from '../store'

class CategoryCheckbox extends React.Component {
  constructor(props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
  }
  handleSwitch() {
    console.log('THE CATEGORY:::', this.props.category)
    this.props.toggleCat(this.props.category)
    console.log('BEFORE FORCE UPDATE')
    this.forceUpdate()
    console.log('AFTER FORCE UPDATE')
  }
  render() {
    const {category, conditions} = this.props
    return (
      <Switch
        name={category}
        onClick={this.handleSwitch}
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
