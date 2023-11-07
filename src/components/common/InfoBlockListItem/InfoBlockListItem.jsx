import React from "react";
import "./InfoBlockListItem.css";

const InfoBlockListItem = ({ children, name, data, status, sessionsData, column, table, btns }) => {
  let nameElement = null;
  let dataElement = null;

  if (name) {
    nameElement = <span className="info-block__item-name">{name}:</span>;
  }

  if (data) {
    if (status) {
      dataElement = <span className="info-block__item-data info-block__item-status">{data}</span>;
    } else if (sessionsData) {
      dataElement = <span className="info-block__item-data info-block__sessions-data">{data}</span>;
    } else {
      dataElement = <span className="info-block__item-data">{data}</span>;
    }
  }

  const itemClasses = ["info-block__item"];

  if (column) {
    itemClasses.push("info-block__item-column");
  }

  if (btns) {
    itemClasses.push("info-block__item-btns");
  }

  return (
    <li className={itemClasses.join(" ")}>
      {nameElement}
      {children}
      {dataElement}
    </li>
  );
};

export default InfoBlockListItem;
