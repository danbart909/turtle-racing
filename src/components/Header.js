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
      return ''
    } else {
      return <span id='header-chosen'>Your Turtle is: {this.props.uberstate.chosenTurtle}</span>
    }
  }

  render() {
    return (
      <>
        <div id='header'>
          <span id='turtle-racing'>Turtle Racing!</span>
          {/* <button onClick={() => {this.headerState()}}>header state</button> */}
          {this.header()}
        </div>
      </>
    )
  }
}