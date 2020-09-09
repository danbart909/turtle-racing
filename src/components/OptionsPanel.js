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

  firstDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Inky' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  secondDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Blinky' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  thirdDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Pinky' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  fourthDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Clyde' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
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
            <span>{this.props.uberstate.raceResults[0].finalScore.toFixed(3)} s</span>
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
            <span>{this.props.uberstate.raceResults[1].finalScore.toFixed(3)} s</span>
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
            <span>{this.props.uberstate.raceResults[2].finalScore.toFixed(3)} s</span>
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
          <span>{this.props.uberstate.raceResults[3].finalScore.toFixed(3)} s</span>
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
            <div id='turtle-bet'>
              <div id='bet-turtle1' className='bet-turtle'>
                <input
                  type='number'
                  id='turtle1-number'
                  className='turtle-number'
                  name='radio-turtle'
                  // name='Inky'
                  min='1'
                  max='50'
                  defaultValue='10'
                  disabled={this.firstDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
              <div id='bet-turtle2' className='bet-turtle'>
              <input
                  type='number'
                  id='turtle2-number'
                  className='turtle-number'
                  name='radio-turtle'
                  // name='Blinky'
                  min='1'
                  max='50'
                  defaultValue='10'
                  disabled={this.secondDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
              <div id='bet-turtle3' className='bet-turtle'>
              <input
                  type='number'
                  id='turtle3-number'
                  className='turtle-number'
                  name='radio-turtle'
                  // name='Pinky'
                  min='1'
                  max='50'
                  defaultValue='10'
                  disabled={this.thirdDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
              <div id='bet-turtle4' className='bet-turtle'>
              <input
                  type='number'
                  id='turtle4-number'
                  className='turtle-number'
                  name='radio-turtle'
                  // name='Clyde'
                  min='1'
                  max='50'
                  defaultValue='10'
                  disabled={this.fourthDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
            </div>
            <div id='turtle-odds'>
              <div id='odds-turtle1' className='odds-turtle'>
                <span>1 in 4</span>
              </div>
              <div id='odds-turtle2' className='odds-turtle'>
                <span>1 in 4</span>
              </div>
              <div id='odds-turtle3' className='odds-turtle'>
                <span>1 in 4</span>
              </div>
              <div id='odds-turtle4' className='odds-turtle'>
                <span>1 in 4</span>
              </div>
            </div>
          </div>
          <div className='panel' id='button'>
            {startStopButton}
            <button onClick={() => {(console.log(this.props.uberstate))}}>props</button>
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