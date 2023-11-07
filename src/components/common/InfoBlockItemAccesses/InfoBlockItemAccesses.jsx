import React from "react";
import "./InfoBlockItemAccesses.css";
import HappyIcon from "../Icons/HappyIcon";
import UnhappyIcon from "../Icons/UnhappyIcon";

const InfoBlockItemAccesses = () => {
  return (
    <div className="info-block__item-accesses">

      <div className="info-block__item-cabinet">

        <div className="info-block__item-cabinet-data">
          <HappyIcon />
          <span className="info-block__item-cabinet-name">Jack Sparrow</span>
        </div>

        <button className="info-block__item-cabinet-btn">Sign in</button>

      </div>

      <div className="info-block__item-cabinet">

        <div className="info-block__item-cabinet-data">
          <UnhappyIcon />
          <span className="info-block__item-cabinet-name">Robert Downey Jr.</span>
        </div>

        <button className="info-block__item-cabinet-btn">Sign in</button>

      </div>

    </div>
  )
};

export default InfoBlockItemAccesses;