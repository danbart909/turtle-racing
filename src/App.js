import React, { Component } from 'react'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
import OptionsPanel from './components/OptionsPanel'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      totalCash: '',
      adjustment: 0,
      endTotal: 0,
      raceStarted: false,
      showResults: false,
      chosenTurtle: '',
      checkChosenTurtle: '',
      InkyBet: 0,
      BlinkyBet: 0,
      PinkyBet: 0,
      ClydeBet: 0,
      gameStarted: false,
      nameOrder: [
        {
          name: '',
          finalScore: ''
        },
        {
          name: '',
          finalScore: ''
        },
        {
          name: '',
          finalScore: ''
        },
        {
          name: '',
          finalScore: ''
        }
      ],
      raceResults: [
        {
          name: '',
          finalScore: ''
        },
        {
          name: '',
          finalScore: ''
        },
        {
          name: '',
          finalScore: ''
        },
        {
          name: '',
          finalScore: ''
        }
      ],
      timeValues: [
        {},
        {},
        {},
        {}
      ]
    }
  }

  getNum = (min, max) => {
    
    return Math.floor(Math.random() * (max - min + 1) ) + min;

  }
  
  getLuckNum = () => {

    const min = 3.3
    const max = 6.6
    return (Math.random() * (max - min)) + min;

  }
  
  getManeuvering = () => {

    const min = 0.1
    const max = 1
    return (Math.random() * (max - min)) + min;

  }

  race = () => {

    const track = {
      length1: 90,
      length2: 100,
      length3: 110,
      maneuvering: this.getManeuvering()
    }
    
    const turtle = [
      {
        name: 'Inky',
        maxSpeed: this.getNum(6, 11),
        acceleration: this.getNum(6, 11),
        luck: this.getLuckNum()
      },
      {
        name: 'Blinky',
        maxSpeed: this.getNum(7, 10),
        acceleration: this.getNum(7, 10),
        luck: this.getLuckNum()
      },
      {
        name: 'Pinky',
        maxSpeed: this.getNum(8, 9),
        acceleration: this.getNum(8, 9),
        luck: this.getLuckNum()
      },
      {
        name: 'Clyde',
        maxSpeed: this.getNum(7.5, 9.5,),
        acceleration: this.getNum(7.5, 9.5),
        luck: this.getLuckNum()
      }
    ]
    
    let racers = []

    let nameOrder = []
    
    let finishOrder = []
    
    let theTrack = {...track}

    turtle.forEach(x => {
      racers.push({...x, rawScore: x.maxSpeed + x.acceleration + x.luck})
    })

    racers.forEach(x => {
      nameOrder.push({...x, finalScore: theTrack.length2 / x.rawScore})
    })

    racers.sort(function(a, b){return b.rawScore - a.rawScore})

    racers.forEach(x => {
      finishOrder.push({...x, finalScore: theTrack.length2 / x.rawScore})
    })

    racers = [];

    finishOrder.sort(function(a, b){return b.rawScore - a.rawScore})

    this.setState({
      raceResults: finishOrder, nameOrder
    })
    return finishOrder;

  }

  startRace = () => {

    let results = this.race()

    if (!this.state.chosenTurtle && this.state.raceStarted) {
      this.setState({ checkChosenTurtle: false })
    } else if (this.state.chosenTurtle) {
      this.setState({ checkChosenTurtle: true })
    }

    this.setState({
      raceStarted: true,
      gameStarted: true,
        timeValues: [
          {1: results[0].finalScore},
          {2: results[1].finalScore},
          {3: results[2].finalScore},
          {4: results[3].finalScore}
        ]
    });

    setTimeout(
      function() {
        this.moneyCalc()
      }
      .bind(this),
      2900
    )

    setTimeout(
      function() {
        this.setState({
          showResults: true
        })
      }
      .bind(this),
      3000
    )

    if (!this.state.totalCash) {
      this.setState({
        totalCash: 50
      })
      console.log(`starting allowance received`)
    } else {
      console.log(`no starting allowance received`)
    }

    if (this.state.chosenTurtle == 'Inky') {
      let modifier = this.state.InkyBet * 2
      this.setState({ adjustment: modifier })
    } else if (this.state.chosenTurtle == 'Blinky') {
      let modifier = this.state.BlinkyBet * 50
      this.setState({ adjustment: modifier })
    } else if (this.state.chosenTurtle == 'Pinky') {
      let modifier = this.state.PinkyBet * 2
      this.setState({ adjustment: modifier })
    } else if (this.state.chosenTurtle == 'Clyde') {
      let modifier = this.state.ClydeBet / 2
      this.setState({ adjustment: modifier })
    } else {
      let modifier = ''
    }

  }

  moneyCalc = () => {

    let final = ''
    let totalCash = this.state.totalCash
    let adjustment = this.state.adjustment

    let currentBet = ''

    if (this.state.chosenTurtle === 'Inky') {
      currentBet = this.state.InkyBet
    } else if (this.state.chosenTurtle === 'Blinky') {
      currentBet = this.state.BlinkyBet
    } else if (this.state.chosenTurtle === 'Pinky') {
      currentBet = this.state.PinkyBet
    } else if (this.state.chosenTurtle === 'Clyde') {
      currentBet = this.state.ClydeBet
    }

    console.log(currentBet)

    if (this.state.raceResults[0].name == this.state.chosenTurtle) {

      final = (totalCash + (currentBet * 4))
      console.log('win', final)
      this.setState({
        winner: true,
        endTotal: final
      }, () => {
        console.log('win', final, this.state, totalCash, currentBet, adjustment);
      })

    } else {
      final = (totalCash - (currentBet / 4))
      this.setState({
        winner: false,
        endTotal: final
      }, () => {
        console.log('lose', final, this.state, totalCash, currentBet, adjustment);
      })
    }

  }

  restartRace = () => {

    this.setState ({
      raceStarted: false,
      showResults: false,
      totalCash: this.state.endTotal
    })

  }

  // updateCurrentBet = () => {

  //   if (this.state.chosenTurtle == 'Inky') {
  //     this.setState({ currentBet: Number(this.state.InkyBet) })
  //   } if (this.state.chosenTurtle == 'Blinky') {
  //     this.setState({ currentBet: Number(this.state.BlinkyBet) })
  //   } if (this.state.chosenTurtle == 'Pinky') {
  //     this.setState({ currentBet: Number(this.state.PinkyBet) })
  //   } if (this.state.chosenTurtle == 'Clyde') {
  //     this.setState({ currentBet: Number(this.state.ClydeBet) })
  //   }

  // }

  updateChosenTurtle = (e) => {

    let name = e.target.value

    this.setState({
      chosenTurtle: name,
    })

    console.log(e.target, e.target.value)

    let bet = ''

    if (this.state.chosenTurtle === 'Inky') {
      bet = this.state.InkyBet
    } else if (this.state.chosenTurtle === 'Blinky') {
      bet = this.state.BlinkyBet
    } else if (this.state.chosenTurtle === 'Pinky') {
      bet = this.state.PinkyBet
    } else if (this.state.chosenTurtle === 'Clyde') {
      bet = this.state.ClydeBet
    }

    console.log(bet)

    // this.setBetting(bet)

  }

  setBetting = (e) => {

    let value = e

    // this.setState ({
    //   currentBet: Number(value)
    // })

    if (this.state.chosenTurtle === 'Inky') {
      this.setState ({
        InkyBet: Number(value)
      })
    } else if (this.state.chosenTurtle === 'Blinky') {
      this.setState ({
        BlinkyBet: Number(value)
      })
    } else if (this.state.chosenTurtle === 'Pinky') {
      this.setState ({
        PinkyBet: Number(value)
      })
    } else if (this.state.chosenTurtle === 'Clyde') {
      this.setState ({
        ClydeBet: Number(value)
      })
    }

  }

  render() {

    return (
      <>
        <div id='overlord'>
          <div id='main'>
            <div id='right'>
              <div id='top'>
                <Header
                  uberstate={this.state}
                />
              </div>
              <div id='bot'>
                <MainPanel
                  uberstate={this.state}
                />
                <button onClick={() => {console.log(this.state)}}>state</button>
              </div>
            </div>
            <div id='left'>
              <OptionsPanel
                uberstate={this.state}
                updateChosenTurtle={this.updateChosenTurtle}
                startRace={this.startRace}
                restartRace={this.restartRace}
                setBetting={this.setBetting}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}