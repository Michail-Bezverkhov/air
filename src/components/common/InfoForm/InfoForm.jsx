import React from "react";
import "./InfoForm.css";

const InfoForm = ({ children, className }) => {
  return (
    <form className={`info-form ${className}`}>
      {children}
    </form>
  );
};


export default InfoForm;