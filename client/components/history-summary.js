import React from 'react'

class HistorySummary extends React.Component {
  constructor() {
    super()
    this.averager = this.averager.bind(this)
  }

  averager(keyArr) {
    let sum = 0
    keyArr.forEach(num => {
      if (typeof num === 'number') sum += num
    })
    return sum / keyArr.length
  }

  render() {
    const {formattedEntries} = this.props
    const avgdEntries = {}
    for (let key in formattedEntries) {
      avgdEntries[key] = this.averager(formattedEntries[key])
    }
    const translatedAvgs = avgdEntries
    return (
      <div className="input-summary col s6">
        <h5>Your History</h5>
        <p> Sleep: {translatedAvgs.sleep} </p>
        <p> Social: {translatedAvgs.social} </p>
        <p> Meals: {translatedAvgs.meals} </p>
        <p> Exercise: {translatedAvgs.exercise} </p>
        <p> Work: {translatedAvgs.work} </p>
        <p> Relax: {translatedAvgs.relax} </p>
        <p> Sun: {translatedAvgs.sun} </p>
      </div>
    )
  }
}

export default HistorySummary
