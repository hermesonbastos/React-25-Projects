import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "./AccordionData";
import './Accordion.css'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleItemClick(index) {
    setActiveIndex((activeIndex) => (activeIndex === index ? null : index));
  }

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === activeIndex}
            onClick={() => handleItemClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
