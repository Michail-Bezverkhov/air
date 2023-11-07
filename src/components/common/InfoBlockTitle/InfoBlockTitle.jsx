import React from "react";
import "./InfoBlockTitle.css";

const InfoBlockTitle = ({ children }) => {
    return (
      <h3 className="info-block__title">{children}</h3>
    );
  };
  
export default InfoBlockTitle;