import React from 'react'

class ViewSelector extends React.Component {
  render() {
    const {displayListView} = this.props
    const viewOptions = [
      {name: 'list', val: true},
      {name: 'graphs', val: false}
    ]
    return (
      <div className="row">
        {viewOptions.map(option => (
          <button
            key={option.name}
            name={option.name}
            onClick={() => displayListView(option.val)}
          >
            View as {option.name}
          </button>
        ))}
      </div>
    )
  }
}
export default ViewSelector
