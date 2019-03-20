import React, {Component} from 'react'
import {connect} from 'react-redux'

class Recommendation extends Component {
  constructor(props) {
    super(props)
    this.handleRecommendations = this.handleRecommendations.bind(this)
  }

  /*eslint-disable */
  handleRecommendations() {
    let finalArray = []
    const recArray = [
      // lack of sleep
      '[0] Take a 30 minute power nap.',
      '[1] Consider sleeping early tonight.',
      // frustrated, overwhelmed / anxiety
      '[2] Start with the easiest thing first no matter how small to get you on a roll to do more things later.',
      '[3] You should call a friend or your therapist to talk about what is currently bothering you.',
      '[4] You should take 5 deep breaths in and 5 deep breaths out to help calm your mind and think more clearly.',
      '[5] You should exercise to improve your mood.',
      '[6] Take a walk outside for 10 minutes to get some fresh air and enjoy the scenery.',
      '[7] Break the tasks into very small manageable steps.',
      '[8] Take some time to journal this morning.',
      // depressed
      '[9] Watch a funny comedy movie to uplift your spirits.',
      '[10] Budget your energy today, but no matter how little energy you have, do things that build you up.',
      '[11] Write down 3 things that you spent ANY time doing.',
      '[12] Take 30 minutes this morning to sit in front of your therapy light.'
    ]

    const {postedEntry} = this.props
    const highEnergy = postedEntry.energy > 0.6
    const highTension = postedEntry.tension > 0.6
    const highPleasant = postedEntry.pleasant > 0.6

    if (highEnergy && highTension && highPleasant) {
      //excited
      return 'You are feeling great today. Keep up the good work.'
    } else if (highTension && highEnergy) {
      //nervous, anxious, fearful, angry, overwhelm?
      if (
        postedEntry.sleep === '0-2' ||
        postedEntry.sleep === '4-6' ||
        postedEntry.sleep === '6-8'
      ) {
        if (postedEntry.sun < 3) {
          if (postedEntry.exercise === 'No') {
            finalArray.push(recArray[0], recArray[1], recArray[12], recArray[5])
          }
          finalArray.push(recArray[0], recArray[1], recArray[12])
        } else {
          finalArray.push(recArray[0], recArray[1])
        }
      }
    } else if (highTension && highPleasant) {
      //looking forward to something
      return 'You will have a good day.'
    } else if (highPleasant && highEnergy) {
      //carefree happiness
      return 'You will have a good day.'
    } else if (highPleasant) {
      //calm, chill, zen
      return 'high pleasant'
    } else if (highEnergy) {
      //aimless, restless, manic
      if (
        postedEntry.sleep === '0-2' ||
        postedEntry.sleep === '4-6' ||
        postedEntry.sleep === '6-8'
      ) {
        if (postedEntry.sun < 3) {
          if (postedEntry.exercise === 'No') {
            finalArray.push(recArray[0], recArray[1], recArray[12], recArray[5])
          }
          finalArray.push(recArray[0], recArray[1], recArray[12])
        } else {
          finalArray.push(recArray[0], recArray[1])
        }
      }
    } else if (highTension) {
      //dread, passive anger, frustration
      return 'high tension'
    } else {
      //depressed
      if (
        postedEntry.sleep === '0-2' ||
        postedEntry.sleep === '4-6' ||
        postedEntry.sleep === '6-8'
      ) {
        if (postedEntry.sun < 3) {
          if (postedEntry.exercise === 'No') {
            finalArray.push(recArray[0], recArray[1], recArray[12], recArray[5])
          }
          finalArray.push(recArray[0], recArray[1], recArray[12])
        } else {
          finalArray.push(recArray[0], recArray[1])
        }
      }
    }
    return finalArray
  }
  /*eslint-enable */

  render() {
    console.log('RECOMMENDATION PROPS', this.props.postedEntry)
    return (
      <div>
        Recommendation!
        {this.handleRecommendations()}
      </div>
    )
  }
}

export default connect()(Recommendation)

// this.props.postedEntry = {
//   createdAt: "2019-03-20T20:52:40.743Z"
//   energy: 0.98194146156311
//   exercise: false
//   id: 10
//   meals: 3
//   moodTrackerId: null
//   pleasant: 0.885622441768646
//   relax: "Usual amount"
//   sleep: "6-8"
//   social: "More than usual"
//   sun: 2
//   tension: 0.853724539279938
//   updatedAt: "2019-03-20T20:52:40.743Z"
//   work: 2
// }
