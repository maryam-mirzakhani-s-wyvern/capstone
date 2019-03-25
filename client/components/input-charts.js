import React from 'react'
import {connect} from 'react-redux'
import {VictoryBar, VictoryGroup} from 'victory'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class InputChart extends React.Component {
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
      {id: 0, val: entry.date},
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
        <VictoryGroup>
          {formatted.map(entry => (
            <VictoryBar
              key={entry.date}
              data={entry}
              // data accessor for x values
              x="id"
              // data accessor for y values
              y="val"
            />
          ))}
        </VictoryGroup>
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries
})

export default connect(mapState)(InputChart)
