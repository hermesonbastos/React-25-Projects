import React from 'react'
import ImageSlider from './ImageSlider'
import './App.css';

import car1 from './img/car-1.jpg';
import car2 from './img/car-2.jpg';
import car3 from './img/car-3.jpg';
import car4 from './img/car-4.jpg';
import car5 from './img/car-5.jpg';

const images = [car1, car2, car3, car4, car5];

const App = () => {

  return (
    <div className='appContainer'>
      <ImageSlider imageUrls={images} />
    </div>
  )
}

export default App