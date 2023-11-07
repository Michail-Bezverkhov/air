import React from "react";
import "./DropdownHeader.css";
import ViewMoreIcon from "../Icons/ViewMoreIcon";

const DropdownHeader = ({ text, active }) => {
  const headerClass = active ? 'dropdown-header dropdown-header--active' : 'dropdown-header';

  return (
    <div className={headerClass}>
      <span className='dropdown-header__name'>{text}</span>
      <button className='dropdown-header__btn'>
        <ViewMoreIcon />
      </button>
    </div>
  );
};

export default DropdownHeader;
