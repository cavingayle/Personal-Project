import React from 'react';
import img from '../../media/craft-design-elegant-46288.jpg';

const Slide3 = () => {
    return (
         <div className='slideshow-container'>
            <div className='mySlides fade'>
            {/* <div className='numbertext'>1/3</div> */}
            <img src={ img } className='landing' alt='jewelry model'/>
            {/* <div className='text'>cool pic 1</div> */}
            </div>
        </div> 
    );
};

export default Slide3;