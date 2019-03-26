import React from 'react'

const exampleCat = [0.2, 0.4, 0.6] //sleep
class HistorySummary extends React.Component {
  constructor() {
    super()
    this.averager = this.averager.bind(this)
  }

  averager(catArr) {
    const sum = catArr.reduce((a, b) => a + b)
    return sum / catArr.length
    //is there a math averager func?
  }

  render() {
    const {allEntries} = this.props
    // here numerize entries
    const avgdEntries = this.averager([0, 1, 0.5])
    // here translate entries back
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
