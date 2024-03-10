import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numStars = 5 }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hover, setHover] = useState(null);

  function handleClick(current) {
    setCurrentRating(currentRating === current ? 0 : current);
  }

  return (
    <div>
      {[...Array(numStars)].map((star, index) => {
        const current = index + 1;
        return (
          <FaStar
            size={50}
            onClick={() => handleClick(current, index)}
            onMouseEnter={() => setHover(current)}
            onMouseLeave={() => setHover(null)}
            color={current <= currentRating || current <= hover ? "#fb1" : ""}
          />
        );
      })}
      <div className="currentRating">Sua avaliação é {currentRating}</div>
    </div>
  );
};

export default StarRating;
