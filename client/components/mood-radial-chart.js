import React, {Component} from 'react'
import {
  VictoryChart,
  VictoryLabel,
  VictoryPolarAxis,
  VictoryArea
} from 'victory'

class MoodRadialChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moodKeys: ['tension', 'energy', 'pleasant']
    }
    this.formatInput = this.formatInput.bind(this)
  }

  formatInput(data) {
    return Array.from(Object.values(data))
  }

  render() {
    const {pleasant, energy, tension} = this.props
    const moodOutput = {pleasant: pleasant, tension: tension, energy: energy}
    return (
      <div>
        <VictoryChart polar domain={{y: [0, 1]}}>
          <VictoryArea
            style={{data: {fill: 'gold', fillOpacity: 0.2, strokeWidth: 2}}}
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
      </div>
    )
  }
}

export default MoodRadialChart
