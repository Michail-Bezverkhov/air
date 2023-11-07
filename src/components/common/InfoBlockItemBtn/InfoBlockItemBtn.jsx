import React from "react";
import "./InfoBlockItemBtn.css";

const InfoBlockItemBtn = ({ children, text }) => {
  return (

    <button className="info-block__item-btn">

      {children}
      
      <span className="info-block__item-btn-text">
        {text}
      </span>
    </button>

  );
};

export default InfoBlockItemBtn;
