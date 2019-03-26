import React from 'react'
import {VictoryBar, VictoryGroup, VictoryChart, VictoryArea} from 'victory'

class HistoryChart extends React.Component {
  constructor() {
    super()
    this.state = {
      showSleep: false,
      showSocial: false,
      showMeals: false,
      showExercise: false,
      showWork: false,
      showRelax: false,
      showSun: false
    }
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
    console.log('SLEEP:::', formatted)
    return (
      <div className="col s6">
        <VictoryChart width={400} height={400}>
          <VictoryGroup
            vertical
            offset={10}
            style={{data: {strokeWidth: 1.5, fillOpacity: 0.4, width: 6}}}
            colorScale={['brown', 'tomato', 'gold']}
          >
            {this.state.showSleep ? (
              <VictoryArea
                data={this.dataFormatting(formatted.sleep)}
                style={{
                  data: {fill: 'cyan', stroke: 'cyan'}
                }}
              />
            ) : (
              <VictoryArea />
            )}
            {this.state.showSocial ? (
              <VictoryArea
                data={this.dataFormatting(formatted.social)}
                style={{
                  data: {fill: 'green', stroke: 'green'}
                }}
              />
            ) : (
              <VictoryArea />
            )}

            {this.state.showMeals ? (
              <VictoryArea
                data={this.dataFormatting(formatted.meals)}
                style={{
                  data: {fill: 'gold', stroke: 'gold'}
                }}
              />
            ) : (
              <VictoryArea />
            )}

            {this.state.showExercise ? (
              <VictoryArea
                data={this.dataFormatting(formatted.exercise)}
                style={{
                  data: {fill: 'tomato', stroke: 'tomato'}
                }}
              />
            ) : (
              <VictoryArea />
            )}

            {this.state.showWork ? (
              <VictoryArea
                data={this.dataFormatting(formatted.work)}
                style={{
                  data: {fill: 'grey', stroke: 'grey'}
                }}
              />
            ) : (
              <VictoryArea />
            )}

            {this.state.showRelax ? (
              <VictoryArea
                data={this.dataFormatting(formatted.relax)}
                style={{
                  data: {fill: 'purple', stroke: 'purple'}
                }}
              />
            ) : (
              <VictoryArea />
            )}

            {this.state.showSun ? (
              <VictoryArea
                data={this.dataFormatting(formatted.sun)}
                style={{
                  data: {fill: 'brown', stroke: 'brown'}
                }}
              />
            ) : (
              <VictoryArea />
            )}
          </VictoryGroup>
        </VictoryChart>
      </div>
    )
  }
}

export default HistoryChart
