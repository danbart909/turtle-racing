import React, { Component } from 'react'
import $ from 'jquery'

export default class MainPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...this.props.uberstate,
      animationFinished: false
    }
  }

  check = () => {
    console.log(this.state)
    console.log(this.props)
  }

  render() {

    const results = this.props.uberstate.nameOrder
    let firstName = results[0].name
    let firstTime = results[0].finalScore
    let secondName = results[1].name
    let secondTime = results[1].finalScore
    let thirdName = results[2].name
    let thirdTime = results[2].finalScore
    let fourthName = results[3].name
    let fourthTime = results[3].finalScore
    
    if (this.props.uberstate.raceStarted == true) {
      $('#turtle1').css({'animation': `${firstTime}s ease-in-out 0s 1 goUp forwards`})
      $('#turtle2').css({'animation': `${secondTime}s ease-in-out 0s 1 goUp forwards`})
      $('#turtle3').css({'animation': `${thirdTime}s ease-in-out 0s 1 goUp forwards`})
      $('#turtle4').css({'animation': `${fourthTime}s ease-in-out 0s 1 goUp forwards`})
    } else {
      $('#turtle1').css({'animation': ``})
      $('#turtle2').css({'animation': ``})
      $('#turtle3').css({'animation': ``})
      $('#turtle4').css({'animation': ``})
    }

    return (
      <>
        <div id='main-panel'>
          <div className='slots' id='slot1'>
            <div className='turtles' id='turtle1'>
              <span>I</span>
            </div>
          </div>
          <div className='slots' id='slot2'>
            <div className='turtles' id='turtle2'>
              <span>B</span>
            </div>
          </div>
          <div className='slots' id='slot3'>
            <div className='turtles' id='turtle3'>
                <span>P</span>
              </div>
          </div>
          <div className='slots' id='slot4'>
            <div className='turtles' id='turtle4'>
              <span>C</span>
            </div>
          </div>
        </div>
        <button onClick={() => {this.check()}}>main</button>
      </>
    )
  }
}