import React from 'react'
import {VictoryBar, VictoryGroup, VictoryAxis} from 'victory'

class HistoryChart extends React.Component {
  render() {
    const formatted = this.props.formattedEntries
    return (
      <div className="col s6">
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
          {/* {formatted.map(entry => (
            <VictoryBar key={entry.date} data={entry} x="id" y="val" />
          ))} */}
        </VictoryGroup>
      </div>
    )
  }
}

export default HistoryChart
