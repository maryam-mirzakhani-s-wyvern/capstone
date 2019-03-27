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
    const {formattedEntries, conditions, handleSwitch, categories} = this.props
    const avgdEntries = this.averageData(formattedEntries)
    const translatedAvgs = avgTranslator(avgdEntries)
    return (
      <div className="input-summary col s4">
        <h5>On average:</h5>
        {categories.map(
          category =>
            category !== 'date' && (
              <div key={category} className="row">
                <p className="col s6">
                  {category[0].toUpperCase() +
                    category.slice(1, category.length)}:{'\n'}
                  {translatedAvgs[category]}
                </p>
                <div className="col s6" style={{textAlign: 'right'}}>
                  <label>Show {category}</label>
                  <CategorySwitch
                    conditions={conditions}
                    category={category}
                    handleSwitch={handleSwitch}
                  />
                </div>
              </div>
            )
        )}
      </div>
    )
  }
}

export default HistorySummary
