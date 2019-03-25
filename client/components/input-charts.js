import React from 'react'
import {connect} from 'react-redux'
import {VictoryBar, VictoryGroup, VictoryAxis} from 'victory'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class HistoryChart extends React.Component {
  constructor(props) {
    super(props)
    this.numerizeData = this.numerizeData.bind(this)
    this.formatData = this.formatData.bind(this)
  }
  numerizeData(data) {
    return data.map(entry => {
      const numEntry = jsonToBrainData(entry)
      numEntry.date = entry.date
      return numEntry
    })
  }
  formatData(data) {
    return data.map(entry => [
      {id: 1, val: entry.sleep},
      {id: 2, val: entry.social},
      {id: 3, val: entry.meals},
      {id: 4, val: entry.exercise},
      {id: 5, val: entry.work},
      {id: 6, val: entry.relax},
      {id: 7, val: entry.sun}
    ])
  }
  render() {
    const {allEntries} = this.props
    const numerized = this.numerizeData(allEntries)
    const formatted = this.formatData(numerized)
    return (
      <div>
        <VictoryGroup
          vertical
          offset={10}
          style={{data: {width: 6}}}
          colorScale={['brown', 'tomato', 'gold']}
        >
          <VictoryAxis
            dependentAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={[
              'Sleep',
              'Social',
              'Meals',
              'Exercise',
              'Work',
              'Relax',
              'Sun'
            ]}
          />
          {formatted.map(entry => (
            <VictoryBar key={entry.date} data={entry} x="id" y="val" />
          ))}
        </VictoryGroup>
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries
})

export default connect(mapState)(HistoryChart)
