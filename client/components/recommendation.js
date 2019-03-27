import React, {Component} from 'react'
import {connect} from 'react-redux'

class Recommendation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfoMessage: false,
      infoMessage: ''
    }
    this.handleRecommendations = this.handleRecommendations.bind(this)
    this.handleInfoclick = this.handleInfoclick.bind(this)
  }

  handleInfoclick() {
    if (!this.state.showInfoMessage) {
      this.setState({
        infoMessage:
          'These are recommendations for handling your habits and predicted mood today based on your inputs.',
        showInfoMessage: true
      })
    } else {
      this.setState({infoMessage: '', showInfoMessage: false})
    }
  }

  /*eslint-disable */
  handleRecommendations() {
    let finalArray = []
    const recArray = [
      // lack of sleep
      'Take a 30 minute power nap.', //0
      'Consider going to bed early tonight or finding time for a short nap today. More sleep might help you feel calm and energized.', //1
      // frustrated, overwhelmed / anxiety
      'If you feel overwhelmed by a task or have too many tasks, start with the easiest thing first no matter how small. Once you get started, you may get on a roll to get more things done.', //2
      'If you feel anxious, you should write in a journal or call a friend to talk about what is currently bothering you. Externalizing your feelings could help you process and move past them.', //3
      'To ease tension, you should take 5 deep breaths in and 5 deep breaths out. Visit the "breathe" tab on the navbar to help calm your mind and think more clearly.', //4
      'Exercising a bit, even just a brisk walk, may improve your mood.', //5
      'Take a walk outside for 10 minutes to get some fresh air. If you can get to nature easily from where you are, go enjoy the scenery.', //6
      'If you have a big task on your agenda, try breaking the task(s) into very small, manageable steps. Keep a checklist and check off the steps when you finish each one.', //7
      'Take some time to journal at some point today and think of things that you feel grateful for. Think about your physical senses as well as your emotions.', //8
      // depressed
      'Try watching a funny movie, reading a webcomic, or playing a game today to uplift your spirits.', //9
      'Budget your energy today, but no matter how little energy you have, do things that build you up. Take time to take care of yourself, and remember that you are allowed to say "no" to others.', //10
      'Write down 3 things that you spent ANY time doing. It can help bring into perspective that you have done things today, no matter how small those things may seem.', //11
      'It looks like you might not get much sunlight today. If you have a therapy lamp, take 30 minutes today to sit in front of it. Otherwise, make sure to take vitamins. You may be deficient in vitamin D3.', //12
      'It looks like you will have a relaxed, pleasant day. Consider meditating for 10 minutes to focus your energy.', //13
      'Carve out some time to eat a balanced meal today. Alternatively, you can ensure that you get proper nutrition by taking a multivitamin consistently.', //14
      //Great day, no changes
      "According to our algorithm, it looks like you'll experience a great day! Keep up with what you've been doing.", //15
      //low relaxation
      'It seems like you could benefit from relaxing more today. Take a few minutes and sit in a comfortable spot. Tense your jaw for a moment. Release it. Tense your neck. Release it. Do this with every muscle from the top of your body down to the bottom. Focus on the feeling of your muscles relaxing.', //16
      'Take a moment and think about the parts of your work that bring you satisfaction. These could be a specific type of task or just the feeling of a specific physical motion.'
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
      if (
        postedEntry.relax === 'Less than usual' ||
        postedEntry.relax === 'Not at all'
      ) {
        finalArray.push(recArray[16])
      }
      if (postedEntry.work < 3) {
        finalArray.push(recArray[17])
      }
    }
    return finalArray
  }
  /*eslint-enable */

  render() {
    const finalArray = this.handleRecommendations()
    return (
      <div>
        <h5>
          Recommendations:<button
            type="button"
            className="info-button"
            onClick={this.handleInfoclick}
          >
            ?
          </button>
          <p className="info-message">{this.state.infoMessage}</p>
        </h5>
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
