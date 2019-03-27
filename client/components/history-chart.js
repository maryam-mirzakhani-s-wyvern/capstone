import React from 'react'
import {VictoryGroup, VictoryChart, VictoryArea, VictoryAxis} from 'victory'
import {format} from 'path'

class HistoryChart extends React.Component {
  constructor() {
    super()
    this.dataFormatting = this.dataFormatting.bind(this)
  }

  dataFormatting(dataArr) {
    let result = []
    for (let i = 0; i < dataArr.length; i++) {
      let coordinates = {x: i, y: dataArr[i]}
      result.push(coordinates)
    }
    return result
  }

  render() {
    const {conditions, categories, chartColors, formattedEntries} = this.props
    return (
      <div className="col s8">
        <VictoryChart width={400} height={400}>
          <VictoryGroup
            vertical
            style={{data: {strokeWidth: 1.5, fillOpacity: 0.4, width: 6}}}
          >
            {categories.map(category => {
              if (conditions[category]) {
                return (
                  <VictoryArea
                    key={category}
                    data={this.dataFormatting(formattedEntries[category])}
                    style={{data: {fill: chartColors[category]}}}
                  />
                )
              }
            })}
          </VictoryGroup>
        </VictoryChart>
      </div>
    )
  }
}

export default HistoryChart
