var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clientfh = function (_React$Component) {
  _inherits(Clientfh, _React$Component);

  function Clientfh() {
    _classCallCheck(this, Clientfh);

    return _possibleConstructorReturn(this, (Clientfh.__proto__ || Object.getPrototypeOf(Clientfh)).apply(this, arguments));
  }

  _createClass(Clientfh, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "bgHeader" },
          React.createElement("img", { src: "./img/Logo2.png", "class": "Logo2" }),
          React.createElement(
            "a",
            { href: "logout.php" },
            "  ",
            React.createElement("i", { "class": "fa-solid fa-arrow-right-from-bracket fa-2xl logout" })
          )
        )
      );
    }
  }]);

  return Clientfh;
}(React.Component);

var domContainer = document.querySelector("#clientf_header_react");
ReactDOM.render(React.createElement(Clientfh, null), domContainer);