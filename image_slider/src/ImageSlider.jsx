import React, { useState } from "react";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";

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
          return <img key={url} src={url} className="img-slider-img" style={{ translate: `${-100 * imageIndex}%` }} />;
        })}
      </div>
      <button
        onClick={() => handlePrevImage()}
        className="img-slide-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={() => handleNextImage()}
        className="img-slide-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default ImageSlider;
