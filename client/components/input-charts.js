import React from 'react'
import {connect} from 'react-redux'
import {VictoryBar} from 'victory'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class InputChart extends React.Component {
  constructor(props) {
    super(props)
    this.numerizeData = this.numerizeData.bind(this)
    this.formatData = this.formatData.bind(this)
  }
  numerizeData(data) {
    return data.map(entry => jsonToBrainData(entry))
  }
  formatData(data) {}
  render() {
    const {allEntries} = this.props
    const data = this.numerizeData(allEntries)
    return (
      <div>
        <VictoryBar
          data={data[0]}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="earnings"
        />
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries
})

export default connect(mapState)(InputChart)
