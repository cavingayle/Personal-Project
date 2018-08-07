import React from 'react';
import Img from '../../media/beads-black-dark-147637.jpg';

const Slide2 = () => {
    return (
        <div className='slideshow-container'>
            <div className='mySlides fade'>
            <img src={ Img } className='landing' alt='jewelry'/>
            </div>
        </div> 
    );
};

export default Slide2;