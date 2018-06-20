import React, { Component } from 'react';
import './Home.css';
import Slide1 from '../Slides/Slide1';
import Slide2 from '../Slides/Slide2';
import Slide3 from '../Slides/Slide3';


export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            slides: 3,
            slide: 1
          }

    }

    prev = () => {
        const { slide } = this.state
        if( slide === 1 ){
          this.setState({ 
              slide: 3 
            })
        }
        else{
          this.setState({ 
              slide: this.state.slide - 1 
            })
        }
      }

    next = () => {
        const { slide  } = this.state
        if( slide === 3 ){
          this.setState({ slide: 1 })
        }
        else{
          this.setState({ slide: this.state.slide + 1 })
        }
        }
      
    handleClick = val => {
        this.setState({ slide: val })
     }

    render() {
        const { slide } = this.state
        return (
            <div>
            { slide === 1 ? <Slide1/> : null } 
            { slide === 2 ? <Slide2/> : null } 
            { slide === 3 ? <Slide3/> : null }
            <a className='prev' onClick={ this.prev }>&#10094;</a>
            <a className='next' onClick={ this.next }>&#10095;</a>
            
            <div className='dots'>
              <span className='dot' onClick={ () => this.handleClick( 1 ) }></span> 
              <span className='dot' onClick={ () => this.handleClick( 2 ) }></span> 
              <span className='dot' onClick= {() => this.handleClick( 3 ) }></span> 
            </div> 
          </div>
        );
    }
}