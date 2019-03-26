import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchThisMorning} from '../store'
import {
  VictoryChart,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryArea,
  VictoryTheme
} from 'victory'

class MoodRadialChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moodKeys: ['tension', 'pleasant', 'energy'],
      showInfoMessage: false,
      infoMessage: ''
    }
    this.formatInput = this.formatInput.bind(this)
    this.handleInfoClick = this.handleInfoClick.bind(this)
  }

  formatInput(data) {
    return Array.from(Object.values(data))
  }

  handleInfoClick() {
    if (!this.state.showInfoMessage) {
      this.setState({
        showInfoMessage: true,
        infoMessage:
          'This is a visualization of the prediction made by our machine learning model to display the inferred pleasantness, tension, and energy level of your day.'
      })
    } else {
      this.setState({showInfoMessage: false, infoMessage: ''})
    }
  }

  render() {
    const {pleasant, energy, tension} = this.props
    const moodOutput = {pleasant: pleasant, tension: tension, energy: energy}
    return (
      <div>
        <h5 className="center-align">
          Mood Graph{' '}
          <button
            type="button"
            className="info-button"
            onClick={this.handleInfoClick}
          >
            ?
          </button>
          <p className="info-message">{this.state.infoMessage}</p>
        </h5>
        <VictoryChart polar domain={{y: [0, 1]}}>
          <VictoryArea
            style={{
              data: {
                padding: 25,
                fill: 'gold',
                fillOpacity: 0.2,
                strokeWidth: 2
              }
            }}
            data={this.formatInput(moodOutput)}
          />
          {this.state.moodKeys.map((label, idx) => (
            <VictoryPolarAxis
              dependentAxis
              key={label}
              style={{
                grid: {stroke: 'grey', strokeWidth: 0.24, opacity: 0.5}
              }}
              tickLabelComponent={
                <VictoryLabel
                  labelPlacement="vertical"
                  angle={45}
                  style={{
                    size: 0.5,
                    fontSize: '8px',
                    fill: 'grey',
                    stroke: 'grey',
                    strokeWidth: 0.24,
                    opacity: 0.5
                  }}
                />
              }
              axisValue={idx + 1}
              label={label}
              labelPlacement="vertical"
            />
          ))}
        </VictoryChart>
      </div>
    )
  }
}

const mapState = state => ({
  postedEntry: state.morningEntry.postedEntry
})

const mapDispatch = dispatch => ({
  fetchMorning: () => dispatch(fetchThisMorning())
})

export default connect(mapState, mapDispatch)(MoodRadialChart)
