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
    const {conditions} = this.props
    console.log('SLEEP:::', formatted.sleep)
    return (
      <div className="col s6">
        <VictoryChart width={400} height={400}>
          <VictoryGroup
            vertical
            offset={10}
            style={{data: {strokeWidth: 1.5, fillOpacity: 0.4, width: 6}}}
            colorScale={['brown', 'tomato', 'gold']}
          >
            {conditions.showSleep && (
              <VictoryArea
                data={this.dataFormatting(formatted.sleep)}
                style={{
                  data: {fill: 'cyan', stroke: 'cyan'}
                }}
              />
            )}
            {conditions.showSocial && (
              <VictoryArea
                data={this.dataFormatting(formatted.social)}
                style={{
                  data: {fill: 'green', stroke: 'green'}
                }}
              />
            )}

            {conditions.showMeals && (
              <VictoryArea
                data={this.dataFormatting(formatted.meals)}
                style={{
                  data: {fill: 'gold', stroke: 'gold'}
                }}
              />
            )}

            {conditions.showExercise && (
              <VictoryArea
                data={this.dataFormatting(formatted.exercise)}
                style={{
                  data: {fill: 'tomato', stroke: 'tomato'}
                }}
              />
            )}

            {conditions.showWork && (
              <VictoryArea
                data={this.dataFormatting(formatted.work)}
                style={{
                  data: {fill: 'grey', stroke: 'grey'}
                }}
              />
            )}

            {conditions.showRelax && (
              <VictoryArea
                data={this.dataFormatting(formatted.relax)}
                style={{
                  data: {fill: 'purple', stroke: 'purple'}
                }}
              />
            )}

            {conditions.showSun && (
              <VictoryArea
                data={this.dataFormatting(formatted.sun)}
                style={{
                  data: {fill: 'brown', stroke: 'brown'}
                }}
              />
            )}
          </VictoryGroup>
        </VictoryChart>
      </div>
    )
  }
}

const mapState = state => ({
  conditions: state.history.displayChart
})

export default connect(mapState)(HistoryChart)
