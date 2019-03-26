import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetch} from '../store'
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
      moodKeys: ['pleasant', 'tension', 'energy']
    }
    this.formatInput = this.formatInput.bind(this)
  }

  formatInput(data) {
    return Array.from(Object.values(data))
  }

  render() {
    console.log('MOOD RADIAL CHART', this.props)
    // let moodOutput
    // if (this.props.pleasant) {
    //   const {pleasant, energy, tension} = this.props
    //   moodOutput = {pleasant: pleasant, tension: tension, energy: energy}
    // } else if (this.props.actualpleasant) {
    //   const {actualpleasant, actualenergy, actualtension} = this.props
    //   moodOutput = {pleasant: actualpleasant, tension: actualtension, energy: actualenergy}
    // }
    const {pleasant, energy, tension} = this.props
    const moodOutput = {pleasant: pleasant, tension: tension, energy: energy}
    return (
      <div>
        <h5 className="center-align">Mood Graph</h5>
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

// const mapState = state => ({
//   postedEntry: state.eveningEntry.postedEntry
// })

// const mapDispatch = dispatch => ({
//   fetchMorning: () => dispatch(fetchThisMorning())
// })

// export default connect(mapState, mapDispatch)(MoodRadialChart)
