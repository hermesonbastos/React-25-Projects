import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numStars = 5 }) => {
  const [currentRating, setCurrentRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(numStars)].map((star, index) => {
        const current = index + 1;
        return (
          <FaStar
            size={50}
            onClick={() => setCurrentRating(current)}
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
