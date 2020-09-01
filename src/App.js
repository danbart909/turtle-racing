import React, { Component } from 'react'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
import OptionsPanel from './components/OptionsPanel'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      raceStarted: false,
      showResults: false,
      chosenTurtle: '',
      checkChosenTurtle: '',
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

    const min = .8
    const max = 1.2
    return (Math.random() * (max - min)) + min;

  }
  
  getManeuvering = () => {

    const min = 0.1
    const max = 1
    return (Math.random() * (max - min)) + min;

  }

  race() {

    const track = {
      length1: 90,
      length2: 100,
      length3: 110,
      maneuvering: this.getManeuvering()
    }
    
    const turtle = [
      {
        name: 'Inky',
        maxSpeed: this.getNum(5, 9),
        acceleration: this.getNum(7, 10),
        luck: this.getLuckNum()
      },
      {
        name: 'Blinky',
        maxSpeed: this.getNum(6, 8),
        acceleration: this.getNum(5, 9),
        luck: this.getLuckNum()
      },
      {
        name: 'Pinky',
        maxSpeed: this.getNum(7, 10),
        acceleration: this.getNum(6, 8),
        luck: this.getLuckNum()
      },
      {
        name: 'Clyde',
        maxSpeed: this.getNum(8, 9),
        acceleration: this.getNum(8, 9),
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



  

  updateChosenTurtle = (e) => {

    this.setState({
      chosenTurtle: e.target.value
    })

  }

  startRace = () => {

    console.log(`race started - your turtle is ${this.state.chosenTurtle}`)

    let results = this.race()

    if (results[0].name == this.state.chosenTurtle) {
      this.setState({ winner: true })
    } else {
      this.setState({ winner: false })
    }

    if (!this.state.chosenTurtle && this.state.raceStarted) {
      this.setState({ checkChosenTurtle: false })
    } else if (this.state.chosenTurtle) {
      this.setState({ checkChosenTurtle: true })
    }

    this.setState({
      raceStarted: true,
        timeValues: [
          {1: results[0].finalScore},
          {2: results[1].finalScore},
          {3: results[2].finalScore},
          {4: results[3].finalScore}
        ]
    })

    console.log(this.state)

    setTimeout(
      function() {
        this.setState({
          showResults: true
        })
      }
      .bind(this),
      3000
    )

  }

  restartRace = () => {

    this.setState ({
      raceStarted: false,
      showResults: false
    })

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
              </div>
            </div>
            <div id='left'>
              <OptionsPanel
                uberstate={this.state}
                updateChosenTurtle={this.updateChosenTurtle}
                startRace={this.startRace}
                restartRace={this.restartRace}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}