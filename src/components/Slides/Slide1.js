import React from 'react';
import girlImg from '../../media/attractive-beautiful-beautiful-girl-458766.jpg';

const Slide1 = () => {
    return (
        <div className='slideshow-container'>
            <div className='mySlides fade'>
                <img src={ girlImg } className='landing' alt='Girl modeling jewelry'/>
            </div>
        </div> 
    );
};

export default Slide1;