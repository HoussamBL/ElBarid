import React from 'react';
import "./ProductCard.css";

var ProductCard = function ProductCard() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { "class": "grid-product" },
      React.createElement(
        "div",
        { id: "product1" },
        "  ",
        React.createElement("img", { src: "/product1.webp", "class": "product1" }),
        " "
      ),
      React.createElement(
        "div",
        { id: "nameProduct" },
        React.createElement(
          "b",
          null,
          "COCA COLA ZERO"
        ),
        " ",
        React.createElement(
          "div",
          { id: "descriptionProduct" },
          React.createElement(
            "b",
            null,
            "25cl"
          )
        )
      ),
      React.createElement(
        "div",
        { id: "qte" },
        React.createElement("input", { id: "qte", type: "number", min: "0", max: "100" })
      ),
      React.createElement(
        "div",
        { id: "price" },
        "4.49 DH"
      ),
      React.createElement(
        "div",
        { id: "button-add-cart" },
        React.createElement("input", { type: "submit", onclick: "myFunction()", id: "button-add-cart", value: "Ajouter au panier" }),
        " "
      )
    )
  );
};

export default ProductCard;