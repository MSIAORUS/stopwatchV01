import './controller.css';
import React, { Component } from 'react'

export default class controller extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         start : true,
         pause : false,
         lap : false,
         reset : false
      }
    }
    startHandler(){
        this.setState({
            ...this.state,
            start : false,
            pause : true,
            lap : true
        })
        this.props.start()
    }

    pauseHandler(){
        this.setState({
            ...this.state,
            start : true,
            pause : false,
            lap : false,
            reset :true
        })
        this.props.pause()
    }

    lapHandler(){
        this.props.lap()
    }

    resetHandler(){
        this.setState({
            ...this.state,
            start : true,
            pause : false,
            lap : false,
            reset : false,
        })
        this.props.reset()
    }


    getController(){
        const {start, pause, lap, reset} = this.state;
        let output = null;

        if(start && !reset){
            output = (
                <div>
                    <button
                    className='btn-strt btn-hover strt-margin '
                    onClick={event => this.startHandler(event)}>
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            )
        }
        else if(pause && lap){
            output = (
                <div>
                    <button 
                    className='btn-pause btn-hover pause-margin '
                    onClick={event => this.pauseHandler(event)}>
                        <i class="fa-solid fa-pause"></i>
                    </button>
                    <button
                    className='btn-lap btn-hover lap-margin '
                    onClick={event => this.lapHandler(event)}>
                        <i class="fa-solid fa-stopwatch-20"></i>
                    </button>
                </div>
            )
        }
        else if(start && reset){
            output = (
                <div>
                    <button
                    className='btn-strt btn-hover strt-margin '
                    onClick={event => this.startHandler(event)}>
                    <i class="fa-solid fa-play"></i>
                    </button>
                    <button
                    className='btn-reset btn-hover reset-margin '
                    onClick={event => this.resetHandler(event)}>
                    <i class="fa-sharp fa-solid fa-rotate-right"></i>
                    </button>
                </div>
            )
        }
        return output;
    }


  render() {
    return this.getController();
  }
}
