import React from "react";
import "./InfoFormList.css";

const InfoFormList = ({ children }) => {
    return (
      <ul className="info-form__list">{children}</ul>
    );
  };
  
export default InfoFormList;