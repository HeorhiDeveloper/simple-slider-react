import React from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';


function App() {
  return (
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg" alt="#"/>
      <img src={image2} className="sliderimg" alt="#"/>
      <img src={image3} className="sliderimg" alt="#"/>
      <img src={image4} className="sliderimg" alt="#"/>
      <img src={image5} className="sliderimg" alt="#"/>
    </AliceCarousel>
    </div>
  );
}

export default App
