

var Products = function Products() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "bgHeader" },
      React.createElement("img", { src: "/Logo2.png", "class": "Logo2" }),
      React.createElement(FiLogOut, { className: "logout" }),
      React.createElement(FiShoppingCart, { className: "cart" })
    ),
    React.createElement(
      "div",
      { className: "bg-Client" },
      React.createElement(
        "div",
        { className: "test" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            { id: "gerer" },
            " GENERER ",
            React.createElement(
              "b",
              null,
              "LA COMMANDE "
            )
          ),
          React.createElement(
            "h2",
            { id: "pour" },
            "Pour ",
            React.createElement(
              "b",
              { className: "client" },
              "nomClient"
            )
          )
        ),
        React.createElement("input", { type: "text", className: "searchProduit", placeholder: "Search.." })
      ),
      React.createElement(
        "div",
        { className: "grid-products" },
        React.createElement(
          "div",
          { id: "grid-item" },
          React.createElement(ProductCard, null)
        ),
        React.createElement(
          "div",
          { id: "grid-item" },
          React.createElement(ProductCard, null)
        ),
        React.createElement(
          "div",
          { id: "grid-item" },
          React.createElement(ProductCard, null)
        ),
        React.createElement(
          "div",
          { id: "grid-item" },
          React.createElement(ProductCard, null)
        ),
        React.createElement(
          "div",
          { id: "grid-item" },
          React.createElement(ProductCard, null)
        ),
        React.createElement(
          "div",
          { id: "grid-item" },
          React.createElement(ProductCard, null)
        )
      )
    )
  );
};

export default Products;