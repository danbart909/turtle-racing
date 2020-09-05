import React, { Component } from 'react'
import $ from 'jquery'

export default class OptionsPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...this.props.uberstate,
      timerDone: false,
      showResults: false
    }
  }

  time1 = () => {
    let minutes = this.props.uberstate.raceResults[0].finalScore.toFixed(2)
    let sign = minutes < 0 ? "-" : "";
    let min = Math.floor(Math.abs(minutes));
    let sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + min + ":" + (sec < 10 ? "0" : "") + sec;
    // return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
   }

   time2 = () => {
    let minutes = this.props.uberstate.raceResults[1].finalScore.toFixed(2)
    let sign = minutes < 0 ? "-" : "";
    let min = Math.floor(Math.abs(minutes));
    let sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + min + ":" + (sec < 10 ? "0" : "") + sec;
   }

   time3 = () => {
    let minutes = this.props.uberstate.raceResults[2].finalScore.toFixed(2)
    let sign = minutes < 0 ? "-" : "";
    let min = Math.floor(Math.abs(minutes));
    let sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + min + ":" + (sec < 10 ? "0" : "") + sec;
   }

   time4 = () => {
    let minutes = this.props.uberstate.raceResults[3].finalScore.toFixed(2)
    let sign = minutes < 0 ? "-" : "";
    let min = Math.floor(Math.abs(minutes));
    let sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + min + ":" + (sec < 10 ? "0" : "") + sec;
   }

  render() {

    const state = this.props.uberstate
    const raceResults = state.raceResults
    
    let winOrLose = ''
    if (!this.props.uberstate.chosenTurtle) {
      winOrLose = <div className='WoL' id='WoL-none'>No Turtle Selected</div>
    } else if (this.props.uberstate.showResults && this.props.uberstate.winner) {
      winOrLose = <div className='WoL' id='WoL-win'>You Win!</div>
    } else if (this.props.uberstate.showResults && !this.props.uberstate.winner) {
      winOrLose = <div className='WoL' id='WoL-lose'>You Lose</div>
    }
    
    let result1HTML = ''
    if (this.props.uberstate.showResults) {
      result1HTML =
        <div className='turtle-results' id='turtle-result1'>
          <div className='turtle-results-place' id='turtle-result1-place'>
            <span>First:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result1-name'>
            <span>{this.props.uberstate.raceResults[0].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result1-time'>
            <span>{this.time1()} s</span>
          </div>
        </div>
    } else {
      result1HTML = ''
    }

    let result2HTML = ''
    if (this.props.uberstate.showResults) {
      result2HTML =
        <div className='turtle-results' id='turtle-result2'>
          <div className='turtle-results-place' id='turtle-result2-place'>
            <span>Second:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result2-name'>
            <span>{this.props.uberstate.raceResults[1].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result2-time'>
            <span>{this.time2()} s</span>
          </div>
        </div>
    } else {
      result2HTML = ''
    }

    let result3HTML = ''
    if (this.props.uberstate.showResults) {
      result3HTML =
        <div className='turtle-results' id='turtle-result3'>
          <div className='turtle-results-place' id='turtle-result3-place'>
            <span>Third:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result3-name'>
            <span>{this.props.uberstate.raceResults[2].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result3-time'>
            <span>{this.time3()} s</span>
          </div>
        </div>
    } else {
      result3HTML = ''
    }

    let result4HTML = ''
    if (this.props.uberstate.showResults) {
      result4HTML =
        <div className='turtle-results' id='turtle-result4'>
          <div className='turtle-results-place' id='turtle-result4-place'>
            <span>Fourth:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result4-name'>
            <span>{this.props.uberstate.raceResults[3].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result4-time'>
          <span>{this.time4()} s</span>
          </div>
        </div>
    } else {
      result4HTML = ''
    }

    let startStopButton = ''
    if (this.props.uberstate.raceStarted == false) {
      startStopButton = <button id='start-button' onClick={() => {this.props.startRace()}}>start</button>
    } else {
      startStopButton = <button id='restart-button' disabled={!this.props.uberstate.showResults} onClick={() => {this.props.restartRace()}}>restart and select new turtle</button>
    }

    setTimeout(() => {
      this.setState({
        showResults: true,
        timerDone: true
      })
    }, 3000)

    if (this.props.uberstate.raceResults[0].name == this.props.uberstate.chosenTurtle) {
      $('#turtle-result1').css({ 'border-top': '1px solid white'})
      $('#turtle-result1').css({ 'border-bottom': '1px solid white'})
    } else if (this.props.uberstate.raceResults[1].name == this.props.uberstate.chosenTurtle) {
      $('#turtle-result2').css({ 'border-top': '1px solid white'})
      $('#turtle-result2').css({ 'border-bottom': '1px solid white'})
    } else if (this.props.uberstate.raceResults[2].name == this.props.uberstate.chosenTurtle) {
      $('#turtle-result3').css({ 'border-top': '1px solid white'})
      $('#turtle-result3').css({ 'border-bottom': '1px solid white'})
    } else if (this.props.uberstate.raceResults[3].name == this.props.uberstate.chosenTurtle) {
      $('#turtle-result4').css({ 'border-top': '1px solid white'})
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
                <input type='radio' name='radio-turtle' id='radio-turtle1' value='Inky' role='radio' disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle1' className='radio-label-turtle' htmlFor='radio-turtle1'>Inky</label>
              </div>
              <div id='div-turtle2' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle2' value='Blinky' role='radio' disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle2' className='radio-label-turtle' htmlFor='radio-turtle2'>Blinky</label>
              </div>
              <div id='div-turtle3' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle3' value='Pinky' role='radio'  disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle3' className='radio-label-turtle' htmlFor='radio-turtle3'>Pinky</label>
              </div>
              <div id='div-turtle4' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle4' value='Clyde' role='radio'  disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle4' className='radio-label-turtle' htmlFor='radio-turtle4'>Clyde</label>
              </div>
            </form>
          </div>
          <div className='panel' id='button'>
            {startStopButton}
            {/* <button onClick={() => {(console.log(this.props))}}>props</button> */}
          </div>
          <div className='panel' id='results'>
            <div id='results-header'>
              <span>Results</span>
            </div>
            <div id='race-results'>
              <div id='WoL-container'>
                {winOrLose}
              </div>
              <div id='results-container'>
                {result1HTML}
                {result2HTML}
                {result3HTML}
                {result4HTML}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}