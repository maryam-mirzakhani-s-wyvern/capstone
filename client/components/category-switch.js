import React from 'react'
import Switch from '@material-ui/core/Switch'

class CategorySwitch extends React.Component {
  render() {
    const {category, conditions, handleSwitch} = this.props
    return (
      <Switch
        name={category}
        onClick={() => handleSwitch(category)}
        checked={conditions[category]}
      />
    )
  }
}

export default CategorySwitch
