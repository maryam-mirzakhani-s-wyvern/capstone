import React from 'react'

class TimeSelector extends React.Component {
  render() {
    const {changeTime} = this.props
    const timeOptions = ['all history', 'last week', 'last month']
    return (
      <div className="row">
        {timeOptions.map(option => (
          <button
            key={option}
            value={option}
            onClick={() => changeTime(option)}
          >
            View {option}
          </button>
        ))}
      </div>
    )
  }
}
export default TimeSelector
