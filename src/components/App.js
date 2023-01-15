import './App.css';
import Countdown from './countdown/countdown';
import Controller from './Controller/controller';
import Laps from './Laps/laps';
import Darkmode from 'darkmode-js';

import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       time: {
        min : 0,
        sec : 0,
        milli: 0,
       },
       laps: [],
    };
  }

  getStart() {
    this.intervalID = setInterval(() => { 
      let min = this.state.time.min
      let sec = this.state.time.sec
      let milli = this.state.time.milli

      if (milli >= 10) {
        sec = sec + 1
        milli = 0
      }

      if (sec >= 60) {
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          milli: milli + 1
        }
      })

    }, 100)
  }

  getPause() {
    clearInterval(this.intervalID)
  }

  getLap() {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })

    console.log(this.state.laps)
  }

  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        milli: 0
      },
      laps: []
    })
  }





  render() {
    const {time} = this.state;
    const options = {
      bottom: '50px', // default: '32px'
      right: 'unset', // default: '32px'
      left: '25px', // default: 'unset'
      time: '0.4s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#000000',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: ' 💡 ', // default: ''
      autoMatchOsTheme: true // default: true
    }
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
    return (
      <div>
        <div className='for-better-body-dark'>
        <h1 className='for-better-body2'>Stop Watch</h1>
        <div className='for-better-body'>
        
          
        <Countdown time={time}/>
        <Controller
                start= { this.getStart.bind(this) }
                pause= { this.getPause.bind(this) }
                reset= { this.getReset.bind(this) }
                lap= { this.getLap.bind(this) }
               />
               <Laps className="my-5" laps={ this.state.laps } />
               
               
        </div>
        </div>
        </div>
    )
  }
}

