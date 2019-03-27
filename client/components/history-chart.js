import React from 'react'
import {VictoryBar, VictoryGroup, VictoryChart, VictoryArea} from 'victory'
import {connect} from 'react-redux'

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
    const formatted = this.props.formattedEntries
    const {conditions, categories, chartColors} = this.props
    return (
      <div className="col s8">
        <VictoryChart width={400} height={400}>
          <VictoryGroup
            vertical
            style={{data: {strokeWidth: 1.5, fillOpacity: 0.4, width: 6}}}
          >
            {categories.map(
              category =>
                conditions[category] && (
                  <VictoryArea
                    key={category}
                    data={this.dataFormatting(formatted[category])}
                    style={{data: {fill: chartColors[category]}}}
                  />
                )
            )}
          </VictoryGroup>
        </VictoryChart>
      </div>
    )
  }
}

export default HistoryChart
