import React, {Component} from 'react'
import {connect} from 'react-redux'
import MoodRadialChart from './mood-radial-chart'
import SingleInputChart from './single-input-chart'
import {fetchThisMorning} from '../store/morning-entry'
import {fetchThisEvening} from '../store/evening-entry'

class Comparison extends Component {
  constructor(props) {
    super(props)
    this.relaxSocial = this.relaxSocial.bind(this)
    this.exercise = this.exercise.bind(this)
    this.sleep = this.sleep.bind(this)
    this.comparison = this.comparison.bind(this)
    this.moods = this.moods.bind(this)
    this.habits = this.habits.bind(this)
  }

  componentDidMount() {
    this.props.fetchEvening()
    this.props.fetchMorning()
  }

  relaxSocial(input) {
    if (input === 'Not at all') return 0
    if (input === 'Less than usual') return 0.33
    if (input === 'Usual amount') return 0.66
    if (input === 'More than usual') return 1
  }

  exercise(input) {
    if (input === false) return 0
    if (input === true) return 1
  }

  sleep(input) {
    if (input === '0-2') return 0
    if (input === '2-4') return 0.25
    if (input === '4-6') return 0.5
    if (input === '6-8') return 0.75
    if (input === '8+') return 1
  }

  comparison() {
    let comparisonArr = []
    const labels = [
      'pleasant',
      'energy',
      'tension',
      'exercise',
      'meals',
      'relax',
      'sleep',
      'social',
      'sun',
      'work'
    ]
    const morning = Object.entries(this.props.morningEntries)
    const evening = Object.entries(this.props.eveningEntries)
    console.log('morning', morning)
    console.log('evening', evening)
    const morningArray = [
      morning[10],
      morning[12],
      morning[11],
      morning[7],
      morning[9],
      morning[6],
      morning[3],
      morning[4],
      morning[5],
      morning[8]
    ]
    const eveningArray = [
      evening[12],
      evening[14],
      evening[13],
      evening[7],
      evening[9],
      evening[6],
      evening[3],
      evening[4],
      evening[5],
      evening[8]
    ]

    for (let i = 0; i < morningArray.length; ++i) {
      if (morningArray[i][0] === 'relax' || morningArray[i][0] === 'social') {
        const relaxSocialResult =
          this.relaxSocial(eveningArray[i][1]) -
          this.relaxSocial(morningArray[i][1])
        comparisonArr.push([labels[i], relaxSocialResult])
      } else if (morningArray[i][0] === 'exercise') {
        const exerciseResult =
          this.exercise(eveningArray[i][1]) - this.exercise(morningArray[i][1])
        comparisonArr.push([labels[i], exerciseResult])
      } else if (morningArray[i][0] === 'sleep') {
        const sleepResult =
          this.sleep(eveningArray[i][1]) - this.sleep(morningArray[i][1])
        comparisonArr.push([labels[i], sleepResult])
      } else {
        comparisonArr.push([labels[i], eveningArray[i][1] - morningArray[i][1]])
      }
    }
    return comparisonArr
  }

  /*eslint-disable */
  moods() {
    const comparisonArr = this.comparison()
    let moods = []
    for (let i = 0; i < comparisonArr.length; ++i) {
      if (comparisonArr[i][1] > 0) {
        if (
          comparisonArr[i][0] === 'pleasant' ||
          comparisonArr[i][0] === 'energy' ||
          comparisonArr[i][0] === 'tension'
        ) {
          moods.push(
            `Your ${
              comparisonArr[i][0]
            } levels are higher than you had expected.`
          )
        }
      } else if (comparisonArr[i][1] < 0) {
        if (
          comparisonArr[i][0] === 'pleasant' ||
          comparisonArr[i][0] === 'energy' ||
          comparisonArr[i][0] === 'tension'
        ) {
          moods.push(
            `Your ${
              comparisonArr[i][0]
            } levels are lower than you had expected.`
          )
        }
      }
    }
    return moods
  }

  habits() {
    const comparisonArr = comparison()
    let habits = []
    for (let i = 0; i < comparisonArr.length; ++i) {
      if (comparisonArr[i][1] > 0) {
        if (comparisonArr[i][0] === 'exercise') {
          habits.push('You exercised more than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'meals') {
          habits.push('You ate more than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'relax') {
          habits.push('You relaxed more than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'sleep') {
          habits.push('You slept more than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'social') {
          habits.push('You socialized more than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'sun') {
          habits.push('There was more sun than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'work') {
          habits.push(
            'Your outlook on work was better than you had anticipated.'
          )
        }
      } else if (comparisonArr[i][1] < 0) {
        if (comparisonArr[i][0] === 'exercise') {
          habits.push('You exercised less than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'meals') {
          habits.push('You ate less than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'relax') {
          habits.push('You relaxed less than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'sleep') {
          habits.push('You slept less than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'social') {
          habits.push('You socialized less than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'sun') {
          habits.push('There was less sun than you had anticipated.')
        }
        if (comparisonArr[i][0] === 'work') {
          habits.push(
            'Your outlook on work was worse than you had anticipated.'
          )
        }
      } else if (comparisonArr[i][1] === 0) {
        habits.push(
          `There was no difference in ${comparisonArr[i][0]} outlook today.`
        )
      }
    }
    return habits
  }

  render() {
    const {morningEntries, eveningEntries} = this.props
    // const comparison = this.comparison()
    // console.log('comparison array', comparison)

    return (
      <div className="row center-align">
        <div className="col s6">
          <h4 className="poiret underline">Expected Output</h4>
          {this.comparison()}

          {/* <div>
            {this.props.morningEntries.id && this.props.morningEntries.id ? (
              {comparison}
            ) : (
              <p>Hello</p>
            )}
          </div> */}

          <SingleInputChart input={morningEntries} />
          {this.props.morningEntries.id && this.props.morningEntries.id ? (
            <MoodRadialChart
              tension={morningEntries.tension}
              pleasant={morningEntries.pleasant}
              energy={morningEntries.energy}
            />
          ) : (
            <div>Nothing to see here!</div>
          )}
        </div>

        <div className="col s6">
          <h4 className="poiret underline">Actual Output</h4>
          <SingleInputChart input={eveningEntries} />
          {this.props.eveningEntries.id && this.props.eveningEntries.id ? (
            <MoodRadialChart
              tension={eveningEntries.actualtension}
              pleasant={eveningEntries.actualpleasant}
              energy={eveningEntries.actualenergy}
            />
          ) : (
            <div>Nothing to see here!</div>
          )}
        </div>

        <div>Habits Overview</div>
        <div>1) Same as expectations</div>
        <div>2) higher values than expectation</div>
        <div>3) lower values than expectation</div>

        <div>
          Mood Overview
          <div>1) Same as expectations</div>
          <div>2) higher values than expectation</div>
          <div>3) lower values than expectation</div>
          <div>1) Journal diffs 2) tags diffs</div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  console.log('POSTEDENTRY ON STATE (eve): ', state.eveningEntry.postedEntry)
  console.log('POSTEDENTRY ON STATE (morn): ', state.morningEntry.postedEntry)

  return {
    eveningEntries: state.eveningEntry.postedEntry,
    morningEntries: state.morningEntry.postedEntry
  }
}

const mapDispatch = dispatch => ({
  fetchMorning: () => dispatch(fetchThisMorning()),
  fetchEvening: () => dispatch(fetchThisEvening())
})

export default connect(mapState, mapDispatch)(Comparison)

// postedEntry = {
//   createdAt: "2019-03-26T23:34:00.741Z"
//   date: "2019-03-26"
//   energy: 0.76671177148819
//   exercise: true
//   filledOut: false
//   id: 3
//   meals: 2
//   pleasant: 0.67562597990036
//   relax: "Less than usual"
//   sleep: "4-6"
//   social: "Less than usual"
//   sun: 2
//   tension: 0.843060553073883
//   updatedAt: "2019-03-26T23:34:00.741Z"
//   userId: 2
//   work: 3
// }
