import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import data from "./AccordionData";
import "./Accordion.css";
import ButtonMulti from "./ButtonMulti";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [multi, setMulti] = useState(false);
  const [multiActive, setMultiActive] = useState(Array(data.length).fill(false));

  console.log(multiActive)

  function handleItemClick(index) {
    setActiveIndex((activeIndex) => (activeIndex === index ? null : index));
  }

  function handleMultiItemClick(i) {
    setMultiActive(multiActive.map((el, index) => {
      if(i === index && el) return false;
      if(i === index || el) return true;
    }))
  }

  function handleChangeMulti() {
    setMulti(!multi);
    setMultiActive(Array(data.length).fill(false));
    setActiveIndex(null);
  }

  return (
    <div className="container">
      <div>
        {data.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={(multi ? multiActive[index] : index === activeIndex)}
              onClick={() => (multi ? handleMultiItemClick(index) : handleItemClick(index))}
            />
          );
        })}
      </div>
      <ButtonMulti onClick={handleChangeMulti}>Multi Seleção {multi ? "On" : "Off"}</ButtonMulti>
    </div>
  );
};

export default Accordion;
