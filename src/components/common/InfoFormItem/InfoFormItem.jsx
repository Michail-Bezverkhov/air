import React from "react";
import "./InfoFormItem.css";

const InfoFormItem = ({ labelFor, labelText, inputType, showClearInput, showQuestion }) => {
  return (
    <li className="info-form__item">

      <div className="info-form__item-title">
        <label htmlFor={labelFor}>{labelText}</label>
        {showQuestion && <button className="info-form__item-question">Why do we need this?</button>}
      </div>

      <div className="info-form__item-field">

        {inputType === "select" ? (

          <>

            <select id={labelFor}>

              <option value="" selected disabled>- please select -</option>
              <option value="Ukraine">Ukraine</option>
              <option value="USA">USA</option>
              <option value="UK">United Kingdom</option>

            </select>

            <span className="info-form__select-icon"></span>

          </>

        ) : (

          <>

            <input id={labelFor} placeholder="Please enter" type={inputType} />
            {showClearInput && <button className="info-form__clear-input"></button>}

          </>

        )}

      </div>

    </li>

  );
};

export default InfoFormItem;