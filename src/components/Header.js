import React, { Component } from 'react'
import $ from 'jquery';

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
      return this.props.uberstate.endTotal.toFixed(2)
    } else if (!this.props.uberstate.raceStarted && !this.props.uberstate.totalCash) {
      return 50
    } else {
      return this.props.uberstate.totalCash.toFixed(2)
    }
  }

  render() {

    if (this.props.uberstate.chosenTurtle === 'Inky') {
      $('#header-bot-1').css({'background-color': 'blue'})
      $('#header-bot-1').css({'color': 'white'})
    } else if (this.props.uberstate.chosenTurtle === 'Blinky') {
      $('#header-bot-1').css({'background-color': 'red'})
      $('#header-bot-1').css({'color': 'black'})
    } else if (this.props.uberstate.chosenTurtle === 'Pinky') {
      $('#header-bot-1').css({'background-color': 'yellow'})
      $('#header-bot-1').css({'color': 'black'})
    } else if (this.props.uberstate.chosenTurtle === 'Clyde') {
      $('#header-bot-1').css({'background-color': 'green'})
      $('#header-bot-1').css({'color': 'white'})
    }

    if (this.props.uberstate.showResults && this.props.uberstate.winner) {
      $('#header-bot-2').css({'background-color': 'rgb(128, 251, 128)'})
      $('#header-bot-2').css({'color': 'black'})
    } else if (this.props.uberstate.showResults && !this.props.uberstate.winner) {
      $('#header-bot-2').css({'background-color': 'rgb(250, 111, 111)'})
      $('#header-bot-2').css({'color': 'black'})
    } else {
      $('#header-bot-2').css({'background-color': 'black'})
      $('#header-bot-2').css({'color': 'white'})
    }

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