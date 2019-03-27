import React from 'react'
import {VictoryGroup, VictoryChart, VictoryArea, VictoryAxis} from 'victory'
import moment from 'moment'

class HistoryChart extends React.Component {
  constructor() {
    super()
    this.dataFormatting = this.dataFormatting.bind(this)
  }

  dataFormatting(categoryData, datesArr) {
    let result = []
    for (let i = 0; i < categoryData.length; i++) {
      let coordinates = {x: new Date(datesArr[i]), y: categoryData[i]}
      result.push(coordinates)
    }
    return result
  }

  render() {
    const {conditions, categories, chartColors, formattedEntries} = this.props
    const datesArr = formattedEntries.date
    const firstDay = datesArr[0]
    const lastDay = datesArr[datesArr.length - 1]
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
                    data={this.dataFormatting(
                      formattedEntries[category],
                      datesArr
                    )}
                    style={{data: {fill: chartColors[category]}}}
                  />
                )
              }
            })}
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[new Date(firstDay), new Date(lastDay)]}
              tickFormat={[
                `${moment(firstDay).format('dddd MMM Do')}`,
                `${moment(lastDay).format('dddd MMM Do')}`
              ]}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={x => `${Math.round(x * 100)}%`}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    )
  }
}

export default HistoryChart
