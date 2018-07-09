import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Slide1 from '../Slides/Slide1';
import Slide2 from '../Slides/Slide2';
import Slide3 from '../Slides/Slide3';
import blueImg from '../../media/blue-1219296_1280.png';
import img from '../../media/Mountain Cuff Bracelet.jpg';
import img2 from '../../media/Father-daughter-necklaces.jpg';
import insta1 from '../../media/Inspirational wire Bracelet.jpg';
import insta2 from '../../media/Initial Heart Necklace.jpg';
import insta3 from "../../media/Oh the Places You'll Go Compass Necklace.jpg";
import insta4 from "../../media/I'd Rather Be Hunting Keychain.jpg";
import insta5 from "../../media/Personalized Anniversary Necklace.jpg";
import insta6 from "../../media/il_570xN.1387294845_f1le.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';
import Slider from 'react-slick';
import $ from 'jquery';


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
      this.rellax = new Rellax('.rellax', {
        center: true
      });
      // , {
      //   speed: -2,
      //   center: false,
      //   wrapper: null,
      //   round: true,
      //   vertical: true,
      //   horizontal: false
      // });
      // const matchMedia = () => ({
      //   matches: false,
      //   addListener() {},
      //   removeListener() {},
      // });
      // window.matchMedia = window.matchMedia || matchMedia;
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
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
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
                  <div className= 'featured-item1 rellax' data-rellax-speed="2">
                    <img className= 'featured-product-img'src={img} alt='product'/>
                  </div>
                  <div className= 'collection-tag2 rellax' data-rellax-speed="6">
                    <span> Collection </span>
                    <h2> Father's Day </h2>
                    <Link to= 'products'><span className= 'feature-underline'> Shop Now </span></Link>
                  </div>
                  <div className= 'featured-item2 rellax' data-rellax-speed="-6">
                    <img className= 'featured-product-img' src={img2} alt='product2'/>
                  </div>
                </div>
                <div>
                  <h2 className= 'social-title'> INSTAGRAM </h2>
                  <div className='home-social-section'>
                    <a className='photos' href='https://www.instagram.com/p/BknWK5MDCrG/?taken-by=aglassofharmony' target= '_blank'><img src={insta1} className='insta-slider'></img></a>
                    <a className='photos' href='https://www.instagram.com/p/BknWK5MDCrG/?taken-by=aglassofharmony' target= '_blank'><img src={insta2} className='insta-slider'></img></a>
                    <a className='photos' href='https://www.instagram.com/p/BknWK5MDCrG/?taken-by=aglassofharmony' target= '_blank'><img src={insta3} className='insta-slider'></img></a>
                    <a className='photos' href='https://www.instagram.com/p/BknWK5MDCrG/?taken-by=aglassofharmony' target= '_blank'><img src={insta4} className='insta-slider'></img></a>
                  </div>
                  {/* <Slider {...settings}>
                    <div>
                      1
                      <a href='https://www.instagram.com/p/BknWK5MDCrG/?taken-by=aglassofharmony' target= '_blank'><img className='insta-slider' src={ insta1 } alt='insta 1'/></a>
                    </div>
                    <div>
                      2
                      <a href='https://www.instagram.com/p/BkkvAUXD4kR/?taken-by=aglassofharmony' target= '_blank'><img className='insta-slider' src={ insta2 } alt= 'insta 2'/></a>
                    </div>
                    <div>
                      3
                      <a href='https://www.instagram.com/p/BjnwDRbjb85/?taken-by=aglassofharmony' target= '_blank'><img className='insta-slider' src={ insta3 } alt= 'insta 3' /></a>
                    </div>
                    <div>
                      4
                      <a href='https://www.instagram.com/p/BjIA-zgjmr_/?taken-by=aglassofharmony' target= '_blank'><img className='insta-slider' src={ insta4 } alt= 'insta 4' /></a>
                    </div>
                    <div>
                      5
                      <a href='https://www.instagram.com/p/BjnwDRbjb85/?taken-by=aglassofharmony' target= '_blank'><img className='insta-slider' src={ insta5 } alt= 'insta 5' /></a>
                    </div>
                    <div>
                      6
                      <a href='https://www.instagram.com/p/BjnwDRbjb85/?taken-by=aglassofharmony' target= '_blank'><img className='insta-slider' src={ insta6 } alt= 'insta 6' /></a>
                    </div>
                  </Slider> */}
                </div>
              </div>
             </div>
        );
    }
}