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

  render() {
    return (
      <>
        <div id='header'>
          {/* <button onClick={() => {this.headerState()}}>header state</button> */}
          <span>Your Turtle is: {this.props.uberstate.chosenTurtle}</span>
        </div>
      </>
    )
  }
}