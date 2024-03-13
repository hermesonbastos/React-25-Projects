import React, { useState } from "react";
import { ArrowBigRight, ArrowBigLeft, Circle, CircleDot } from "lucide-react";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  function handlePrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }

  return (
    <div className="img-slider">
      <div className="img-slider-images">
        {imageUrls.map((url) => {
          return (
            <img
              key={url}
              src={url}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}
      </div>
      <button
        onClick={() => handlePrevImage()}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={() => handleNextImage()}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div className="img-slider-buttons">
        {imageUrls.map((_, index) => {
          return (
            <button className="img-slider-dot-btn" key={index} onClick={() => setImageIndex(index)}>
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
