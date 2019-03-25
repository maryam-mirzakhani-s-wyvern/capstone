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
      'Take a 30 minute power nap.', //0
      'Consider sleeping early tonight.', //1
      // frustrated, overwhelmed / anxiety
      'Start with the easiest thing first no matter how small to get you on a roll to do more things later.', //2
      'You should call a friend to talk about what is currently bothering you.', //3
      'You should take 5 deep breaths in and 5 deep breaths out to help calm your mind and think more clearly.', //4
      'Some exercises may improve your mood.', //5
      'Take a walk outside for 10 minutes to get some fresh air and enjoy the scenery.', //6
      'Break the tasks into very small manageable steps.', //7
      'Take some time to journal this morning and think of things that you"re grateful for.', //8
      // depressed
      'Watch a funny comedy movie to uplift your spirits.', //9
      'Budget your energy today, but no matter how little energy you have, do things that build you up.', //10
      'Write down 3 things that you spent ANY time doing.', //11
      'Take 30 minutes this morning to sit in front of your therapy light.', //12
      'Consider meditating for 10 minutes to focus your energy.', //13
      'Carve out some time to eat a balanced meal today.', //14
      //Great day, no changes
      "You will most likely experience a great day! Keep up with what you've been doing." //15
    ]

    const {postedEntry} = this.props
    const highEnergy = postedEntry.energy > 0.6
    const lowEnergy = !highEnergy
    const highTension = postedEntry.tension > 0.6
    const lowTension = !highTension
    const highPleasant = postedEntry.pleasant > 0.6
    const lowPleasant = !highPleasant

    if (highPleasant) {
      //HIGH PLEASANT DAYS
      if (highEnergy && highTension) {
        //excited
        finalArray.push(recArray[15])
      }
      if (highEnergy && lowTension) {
        //carefree happiness
        finalArray.push(recArray[15])
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
      // LOW PLEASANT DAYS
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

      // DAILY INPUTS CHECKS
      if (postedEntry.sleep === '0-2' || postedEntry.sleep === '4-6') {
        finalArray.push(recArray[1])
      }
      if (postedEntry.sun < 3) {
        finalArray.push(recArray[12])
      }
      if (postedEntry.meals < 2) {
        finalArray.push(recArray[14])
      }
      if (postedEntry.exercise === false) {
        finalArray.push(recArray[5])
      }
    }
    return finalArray
  }
  /*eslint-enable */

  render() {
    const finalArray = this.handleRecommendations()
    return (
      <div>
        <h5>Recommendations:</h5>
        {finalArray.length < 2 ? (
          finalArray.toString()
        ) : (
          <ul>{finalArray.map(rec => <li key={rec}>{rec}</li>)}</ul>
        )}
      </div>
    )
  }
}

export default connect()(Recommendation)
