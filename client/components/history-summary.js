import React from 'react'
import {CategorySwitch} from './'
import {avgTranslator} from '../../utils'

class HistorySummary extends React.Component {
  constructor() {
    super()
    this.averager = this.averager.bind(this)
    this.averageData = this.averageData.bind(this)
  }

  averager(keyArr) {
    let sum = 0
    keyArr.forEach(num => {
      if (typeof num === 'number') sum += num
    })
    return sum / keyArr.length
  }

  averageData(entries) {
    const avgdEntries = {}
    for (let key in entries) {
      avgdEntries[key] = this.averager(entries[key])
    }
    return avgdEntries
  }

  render() {
    const {
      formattedEntries,
      conditions,
      handleSwitch,
      categories,
      chartColors
    } = this.props
    const avgdEntries = this.averageData(formattedEntries)
    const translatedAvgs = avgTranslator(avgdEntries)
    return (
      <div className="input-summary col s12 m4 l4">
        <h5 style={{textAlign: 'right'}}>On average:</h5>
        {categories.map(
          category =>
            category !== 'date' && (
              <div key={category} className="row">
                <div className="col s12 m6 l6">
                  <label style={{color: chartColors[category]}}>
                    Show {category}
                  </label>
                  <CategorySwitch
                    conditions={conditions}
                    category={category}
                    handleSwitch={handleSwitch}
                  />
                </div>
                <p className="col s12 m6 l6" style={{textAlign: 'right'}}>
                  {category[0].toUpperCase() +
                    category.slice(1, category.length)}:{'\n'}
                  {translatedAvgs[category]}
                </p>
              </div>
            )
        )}
      </div>
    )
  }
}

export default HistorySummary
