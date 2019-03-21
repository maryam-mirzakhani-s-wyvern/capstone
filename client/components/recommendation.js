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
      '[3] You should call a friend to talk about what is currently bothering you.',
      '[4] You should take 5 deep breaths in and 5 deep breaths out to help calm your mind and think more clearly.',
      '[5] You should exercise to improve your mood.',
      '[6] Take a walk outside for 10 minutes to get some fresh air and enjoy the scenery.',
      '[7] Break the tasks into very small manageable steps.',
      '[8] Take some time to journal this morning and think of things that you"re grateful for.',
      // depressed
      '[9] Watch a funny comedy movie to uplift your spirits.',
      '[10] Budget your energy today, but no matter how little energy you have, do things that build you up.',
      '[11] Write down 3 things that you spent ANY time doing.',
      '[12] Take 30 minutes this morning to sit in front of your therapy light.',
      '[13] Consider meditating for 10 minutes to focus your energy.'
    ]

    const {postedEntry} = this.props
    const highEnergy = postedEntry.energy > 0.6
    const lowEnergy = !highEnergy
    const highTension = postedEntry.tension > 0.6
    const lowTension = !highTension
    const highPleasant = postedEntry.pleasant > 0.6
    const lowPleasant = !highPleasant

    if (highPleasant) {
      if (highEnergy && highTension) {
        //excited
        finalArray.push(
          'You will most likely experience a great day! Keep up with what you"ve been doing.'
        )
      }
      if (highEnergy && lowTension) {
        //carefree happiness
        finalArray.push(
          'You will most likely experience a highly pleasant and energetic day.'
        )
      }
      if (lowEnergy && highTension) {
        //looking forward to something
        finalArray.push(recArray[8])
      }
      if (lowEnergy && lowTension) {
        //calm, chill, zen
        finalArray.push(recArray[13])
      }
    } else if (lowPleasant) {
      if (highEnergy && highTension) {
        //nervous, anxious, fearful, angry, overwhelm

        finalArray.push(recArray[7])
      }
      if (highEnergy && lowTension) {
        //aimless, restless, manic
        finalArray.push(recArray[0], recArray[6])
      }
      if (lowEnergy && highTension) {
        //dread, passive anger, frustration
        finalArray.push(recArray[3])
      }
      if (lowEnergy && lowTension) {
        //depressed
        finalArray.push(recArray[2])
      }
    }
  }

  //   if (highEnergy && highTension && highPleasant) {
  //     //excited
  //     return 'You will most likely experience a great day! Keep up with what you"ve been doing.'
  //   } else if (highTension && highEnergy && lowPleasant) {
  //     //nervous, anxious, fearful, angry, overwhelm?
  //     // lack of sleep and exercise
  //     if (postedEntry.sleep === '0-2' || postedEntry.sleep === '4-6') {
  //       if (postedEntry.exercise === 'No') {
  //         finalArray.push(recArray[1], recArray[5])
  //       }
  //     } else if (postedEntry.sleep === '0-2' || postedEntry.sleep === '4-6') {
  //       finalArray.push(recArray[1])
  //     } else if (postedEntry.exercise === 'No') {
  //       finalArray.push(recArray[5])
  //     }
  //     finalArray.push(recArray[7])
  //   } else if (highTension && highPleasant && lowEnergy) {
  //     //looking forward to something
  //     finalArray.push(recArray[8])
  //   } else if (highPleasant && highEnergy && lowTension) {
  //     //carefree happiness
  //     return 'You will most likely experience a highly pleasant and energetic day.'
  //   } else if (highPleasant && lowEnergy && lowTension) {
  //     //calm, chill, zen
  //     finalArray.push(recArray[13])
  //   } else if (highEnergy && lowTension && lowPleasant) {
  //     //aimless, restless, manic
  //     if (postedEntry.exercise === 'No') {
  //       if (
  //         postedEntry.relax === 'Not at all' ||
  //         postedEntry.relax === 'Less than usual'
  //       ) {
  //         finalArray.push(recArray[5], recArray[6])
  //       }
  //       finalArray.push(recArray[5])
  //     }
  //     finalArray.push(recArray[0], recArray[6])
  //   } else if (highTension && lowEnergy && lowPleasant) {
  //     //dread, passive anger, frustration
  //     if (postedEntry.work < 3) {
  //       finalArray.push(recArray[3])
  //     } else if (
  //       postedEntry.relax === 'Not at all' ||
  //       postedEntry.relax === 'Less than usual'
  //     ) {
  //       finalArray.push(recArray[5])
  //     }
  //     finalArray.push(recArray[3])
  //   } else if (lowEnergy && lowTension && lowPleasant) {
  //     //depressed
  //     // if the sun and exercise are low
  //     if (postedEntry.sun < 3) {
  //       if (postedEntry.exercise === 'No') {
  //         finalArray.push(recArray[5], recArray[12])
  //       }
  //       finalArray.push(recArray[12])
  //       // if social is low
  //     } else if (
  //       postedEntry.social === 'Not at all' ||
  //       postedEntry.social === 'Less than usual'
  //     ) {
  //       finalArray.push(recArray[3])
  //       // if work is low
  //     } else if (postedEntry.work < 3) {
  //       finalArray.push(recArray[10])
  //     } else {
  //       finalArray.push(recArray[2])
  //   }
  //   return finalArray
  // }
  /*eslint-enable */

  render() {
    console.log('RECOMMENDATION PROPS', this.props.postedEntry)
    return <div>{this.handleRecommendations()}</div>
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
