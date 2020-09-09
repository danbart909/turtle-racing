import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: this.props.uberstate
    }
  }

  headerState = () => {
    console.log(this.state)
    console.log(this.props)
  }

  header = () => {
    if (!this.props.uberstate.chosenTurtle) {
      return 'No Turtle Selected'
    } else {
      return `Your Turtle is: ${this.props.uberstate.chosenTurtle}`
    }
  }

  cashTotal = () => {
    if (this.props.uberstate.raceStarted) {
      return this.props.uberstate.endTotal
    } else if (!this.props.uberstate.raceStarted && !this.props.uberstate.totalCash) {
      return 50
    } else {
      return this.props.uberstate.totalCash
    }
  }

  render() {
    return (
      <>
        <div id='header'>
          <div id='header-top'>
            <div id='header-turtle-racing'>
              <span>Turtle Racing!</span>
            </div>
          </div>
          <div id='header-bottom'>
            <div id='header-bot-1'>
              <span>{this.header()}</span>
            </div>
            <div id='header-bot-2'>
              <span>${this.cashTotal()}</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}