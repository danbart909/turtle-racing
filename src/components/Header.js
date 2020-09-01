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

  render() {
    return (
      <>
        <div id='header'>
          <div id='header-turtle-racing'>
            <span>Turtle Racing!</span>
          </div>
          <div id='header-chosen-turtle'>
            <span>{this.header()}</span>
          </div>
        </div>
      </>
    )
  }
}