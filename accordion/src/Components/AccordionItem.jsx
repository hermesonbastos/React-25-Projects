import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import './Accordion.css'

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeigh = useRef();

  return (
    <div className="wrapper">
      <button className={`question-container ${isOpen ? "active" : ""}`} onClick={onClick}>
        <p className="question-content">
          {question}
        </p>
        <IoIosArrowDown className={`arrow ${isOpen ? "active" : ""}`} />
      </button>
      <div
        ref={contentHeigh}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeigh.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
