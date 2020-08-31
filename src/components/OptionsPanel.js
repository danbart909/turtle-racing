import React, { Component } from 'react'
import $ from 'jquery'

export default class OptionsPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      state: this.props.uberstate
    }
  }

  results = () => {
    const state = this.props.uberstate
    let raceResults = state.raceResults
    let results = raceResults.map(x => (
      <div className='turtle-results'>${x.name}</div>
    ))
    console.log(results)

    return results;
  }

  render() {

    const state = this.props.uberstate
    const raceResults = state.raceResults

    let resultsHTML = ''

    if (this.props.uberstate.showResults) {
      resultsHTML = raceResults.map(x => (
        <div className='turtle-result'>{x.name}</div>
      ))
    } else {
      resultsHTML = ''
    }

    let winOrLose = ''

    if (!this.props.uberstate.chosenTurtle) {
      winOrLose = `No Turtle Selected`
    } else if (this.props.uberstate.showResults && this.props.uberstate.winner) {
      winOrLose = `You Win`
    } else if (this.props.uberstate.showResults && !this.props.uberstate.winner) {
      winOrLose = 'You Lose'
    }

    let buttons = ''

    if (this.props.uberstate.raceStarted == false) {
      buttons = <button onClick={() => {this.props.startRace()}}>start</button>
    } else {
      buttons = <button onClick={() => {this.props.restartRace()}}>restart</button>
    }
    

    return (
      <>
        <div id='options-panel'>
          <div className='panel' id='options'>
            <form
              id='turtle-radio-form'
              onChange={(e) => {this.props.updateChosenTurtle(e)}}
            >
              <div id='div-turtle1' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle1' value='Inky' role='radio'/><label id='radio-label-turtle1' className='radio-label-turtle' htmlFor='radio-turtle1'>Inky</label>
              </div>
              <div id='div-turtle2' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle2' value='Blinky' role='radio'/><label id='radio-label-turtle2' className='radio-label-turtle' htmlFor='radio-turtle2'>Blinky</label>
              </div>
              <div id='div-turtle3' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle3' value='Pinky' role='radio'/><label id='radio-label-turtle3' className='radio-label-turtle' htmlFor='radio-turtle3'>Pinky</label>
              </div>
              <div id='div-turtle4' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle4' value='Clyde' role='radio'/><label id='radio-label-turtle4' className='radio-label-turtle' htmlFor='radio-turtle4'>Clyde</label>
              </div>
            </form>
          </div>
          <div className='panel' id='button'>
            {buttons}
            {/* <button onClick={() => {(console.log(this.state))}}>this.state</button> */}
            {/* <button onClick={() => {(console.log(this.props))}}>this.props</button> */}
          </div>
          <div className='panel' id='results'>
            <div id='results-header'>
              <span>results</span>
            </div>
            <div id='race-results'>
              <span>{winOrLose}</span>
              <span>{resultsHTML}</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}