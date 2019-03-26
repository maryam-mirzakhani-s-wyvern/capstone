import React from 'react'

class BreatheBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breatheIn: true,
      intervalId: null
    }
    this.renderBreathingComponent = this.renderBreathingComponent.bind(this)
    this.toggleBreathing = this.toggleBreathing.bind(this)
  }

  componentDidMount() {
    const intervalId = setInterval(this.toggleBreathing, 4000)
    this.setState({intervalId: intervalId})
  }

  toggleBreathing() {
    this.setState({breatheIn: !this.state.breatheIn})
  }

  renderBreathingComponent(breatheIn) {
    if (breatheIn) {
      return (
        <button id="breathe-block" className="breathe-in-block">
          breathe in
        </button>
      )
    } else {
      return (
        <button id="breathe-block" className="breathe-out-block">
          breathe out
        </button>
      )
    }
  }
  render() {
    return (
      <div>
        <div id="breathing-box">
          {this.renderBreathingComponent(this.state.breatheIn)}
        </div>
      </div>
    )
  }
}
export default BreatheBlock
