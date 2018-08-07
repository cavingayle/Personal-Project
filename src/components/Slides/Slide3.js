import React from 'react';
import img from '../../media/craft-design-elegant-46288.jpg';

const Slide3 = () => {
    return (
         <div className='slideshow-container'>
            <div className='mySlides fade'>
            <img src={ img } className='landing' alt='jewelry model'/>
            </div>
        </div> 
    );
};

export default Slide3;