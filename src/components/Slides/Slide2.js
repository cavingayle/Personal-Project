import React from 'react';
import Img from '../../media/beads-black-dark-147637.jpg';

const Slide2 = () => {
    return (
        <div className='slideshow-container'>
            <div className='mySlides fade'>
            {/* <div className='numbertext'>1/3</div> */}
            <img src={ Img } className='landing' alt='jewelry'/>
            {/* <div className='text'>cool pic 1</div> */}
            </div>
        </div> 
    );
};

export default Slide2;