import React from 'react';
import girlImg from '../../media/attractive-beautiful-beautiful-girl-458766.jpg';

const Slide1 = () => {
    return (
        <div className='slideshow-container'>
            <div className='mySlides fade'>
            {/* <div className='numbertext'>1/3</div> */}
            <img src={ girlImg } className='landing' alt='Girl modeling jewelry'/>
            {/* <div className='text'>cool pic 1</div> */}
            </div>
        </div> 
    );
};

export default Slide1;