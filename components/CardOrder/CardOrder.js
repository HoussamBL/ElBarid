import React from 'react';
import "./CardOrder.css";
import { AiOutlineDelete } from "react-icons/ai";

var CardOrder = function CardOrder() {
  return React.createElement(
    "div",
    { className: "grid-order-container" },
    React.createElement(
      "div",
      { id: "img" },
      " ",
      React.createElement("img", { src: "./orderImg.png" })
    ),
    React.createElement(
      "div",
      { id: "nom-description" },
      " CocaCola zero",
      React.createElement(
        "div",
        { id: "descrpition" },
        "25cl"
      )
    ),
    React.createElement(
      "div",
      { id: "qtee" },
      React.createElement("input", { id: "qtee", type: "number", min: "0", max: "100" })
    ),
    React.createElement(
      "div",
      { id: "delete" },
      React.createElement(AiOutlineDelete, null)
    ),
    React.createElement(
      "div",
      { id: "prix" },
      "40dh"
    )
  );
};

export default CardOrder;