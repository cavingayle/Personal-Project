import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Slide1 from '../Slides/Slide1';
import Slide2 from '../Slides/Slide2';
import Slide3 from '../Slides/Slide3';
import blueImg from '../../media/blue-1219296_1280.png';
import img from '../../media/Mountain Cuff Bracelet.jpg';
import img2 from '../../media/Father-daughter-necklaces.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';


// var rellax = new Rellax('.rellax')

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            slides: 3,
            slide: 1
          }

    }

    componentDidMount(){
      AOS.init({
        // offset: 200,
        // duration: 600,
        // easing: 'ease-in-sine',
        // delay: 100,
      });
      // var rellax = new Rellax('.rellax')
      // , {
      //   speed: -2,
      //   center: false,
      //   wrapper: null,
      //   round: true,
      //   vertical: true,
      //   horizontal: false
      // });
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

      // AOS.init()

        const { slide } = this.state
        return (
            <div className= 'outer-container'>
              <div className= 'slide-container'>
                { slide === 1 ? <Slide1/> : null } 
                { slide === 2 ? <Slide2/> : null } 
                { slide === 3 ? <Slide3/> : null }
                <a className='prev' onClick={ this.prev }>&#10094;</a>
                <a className='next' onClick={ this.next }>&#10095;</a>
                
                <div className='dots'>
                  <span className='dot' onClick={ () => this.handleClick( 1 ) }></span> 
                  <span className='dot' onClick={ () => this.handleClick( 2 ) }></span> 
                  <span className='dot' onClick={ () => this.handleClick( 3 ) }></span> 
                </div> 
              </div>
              <div className='home-container'>
                <div data-aos="fade-right"
                     data-aos-offset="500"
                     data-aos-duration="500"
                     className= 'featured-title1'>
                 Featured 
                </div>
                <div data-aos="fade-left"
                     data-aos-offset="500"
                     data-aos-duration="500"
                     className= 'featured-title2'> Collection 
                </div>
                <div className= 'featured-section'>
                  <img className='logo' src='http://res.cloudinary.com/dbwgwsaeg/image/upload/v1529895879/Oh_the_Places_You_ll_Go_Compass_Necklace.jpg' alt= 'logo'/>
                </div>
                <div className= 'collection-tag'>
                  <span> Collection </span>
                  <h2> Mother's Day </h2>
                  <Link to= 'products'><span className= 'feature-underline'> Shop Now </span></Link>
                </div>
                <div className= 'featured-items'>
                  <div className= 'featured-item1'>
                    <img className= 'featured-product-img'src={img} alt='product'/>
                  </div>
                  <div className= 'collection-tag2'>
                    <span> Collection </span>
                    <h2> Father's Day </h2>
                    <Link to= 'products'><span className= 'feature-underline'> Shop Now </span></Link>
                  </div>
                  <div className= 'featured-item2'>
                    <img className= 'featured-product-img' src={img2} alt='product2'/>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}