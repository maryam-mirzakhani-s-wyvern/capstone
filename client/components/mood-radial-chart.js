import React, {Component} from 'react'
import {
  VictoryChart,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryArea,
  VictoryTheme
} from 'victory'

const sampleMoodOutput = {pleasant: 0.6, tension: 0.2, energy: 0.8}

class MoodRadialChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moodKeys: ['pleasant', 'tension', 'energy']
    }
    this.formatInput = this.formatInput.bind(this)
  }
  formatInput(data) {
    return Array.from(Object.values(data))
  }

  render() {
    return (
      <VictoryChart polar domain={{y: [0, 1]}}>
        <VictoryArea
          style={{data: {fill: 'gold', fillOpacity: 0.2, strokeWidth: 2}}}
          data={this.formatInput(sampleMoodOutput)}
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
                style={{
                  size: 0.5,
                  fontSize: '10px',
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
    )
  }
}

export default MoodRadialChart
