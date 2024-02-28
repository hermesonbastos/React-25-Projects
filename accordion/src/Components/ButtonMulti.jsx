import React from "react";
import "./ButtonMulti.css";

const ButtonMulti = ({ children, onClick }) => {
  return <button className="buttonMulti" onClick={onClick}>{children}</button>;
};

export default ButtonMulti;
