import React from 'react'
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class SingleInputChart extends React.Component {
  constructor(props) {
    super(props)
    this.numerizeData = this.numerizeData.bind(this)
    this.formatData = this.formatData.bind(this)
  }
  numerizeData(entry) {
    const numEntry = jsonToBrainData(entry)
    numEntry.date = entry.date
    return numEntry
  }
  formatData(entry) {
    return [
      {id: 1, val: entry.sleep},
      {id: 2, val: entry.social},
      {id: 3, val: entry.meals},
      {id: 4, val: entry.exercise},
      {id: 5, val: entry.work},
      {id: 6, val: entry.relax},
      {id: 7, val: entry.sun}
    ]
  }
  render() {
    const {input} = this.props
    const numerized = this.numerizeData(input)
    const formatted = this.formatData(numerized)
    return (
      <div>
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={[
              `Sleep \n (${input.sleep})`,
              `Social \n (${input.social})`,
              `Meals  \n (${input.meals})`,
              `Exercise \n (${input.exercise ? 'Yes' : 'No'})`,
              `Work \n (${input.work})`,
              `Relax \n (${input.relax})`,
              `Sun \n (${input.sun})`
            ]}
            style={{
              ticks: {stroke: 'grey', size: 5},
              tickLabels: {fontSize: 10, padding: 5}
            }}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickValues={[0, 1]}
            tickFormat={['min', 'max']}
          />
          <VictoryBar
            key={formatted.date}
            data={formatted}
            x="id"
            y="val"
            offset={10}
            style={{data: {fill: '#fd6c49', fillOpacity: 0.8}}}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default SingleInputChart
