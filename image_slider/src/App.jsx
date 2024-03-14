import React from "react";
import ImageSlider from "./ImageSlider";
import "./App.css";

import car1 from "./img/car-1.jpg";
import car2 from "./img/car-2.jpg";
import car3 from "./img/car-3.jpg";
import car4 from "./img/car-4.jpg";
import car5 from "./img/car-5.jpg";

const images = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const App = () => {
  return (
    <div className="appContainer">
      <ImageSlider imageUrls={images} />
    </div>
  );
};

export default App;
