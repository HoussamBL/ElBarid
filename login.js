var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
        _inherits(Login, _React$Component);

        function Login() {
                _classCallCheck(this, Login);

                return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
        }

        _createClass(Login, [{
                key: "render",
                value: function render() {

                        return React.createElement(
                                "div",
                                null,
                                React.createElement("link", { rel: "stylesheet", href: "./css/login.css" }),
                                React.createElement("script", { src: "" }),
                                React.createElement(
                                        "div",
                                        { className: "bg-Form" },
                                        " "
                                ),
                                React.createElement("img", { src: "img/Logo1.png", "class": "Logo1" }),
                                React.createElement(
                                        "p",
                                        { "class": "welcome" },
                                        "BIENVENUE CHEZ BARID AL-MAGHRIB DISTRIBUTION  ! ",
                                        React.createElement(
                                                "b",
                                                { "class": "login" },
                                                "CONNECTER-VOUS"
                                        ),
                                        " "
                                ),
                                React.createElement("div", { "class": "vl" }),
                                React.createElement(
                                        "form",
                                        { action: "login.php", method: "post" },
                                        React.createElement(
                                                "label",
                                                { "class": "fuser" },
                                                "Nom d'utilisateur :"
                                        ),
                                        React.createElement("br", null),
                                        React.createElement("input", { type: "text", id: "fuser", name: "username" }),
                                        React.createElement("br", null),
                                        React.createElement(
                                                "label",
                                                { "class": "fmdp" },
                                                "Mot de passe :"
                                        ),
                                        React.createElement("br", null),
                                        React.createElement("input", { type: "password", id: "fmdp", name: "password" }),
                                        React.createElement("br", null),
                                        React.createElement("input", { type: "submit", onclick: "myFunction()", id: "button-login", value: "Se connecter" })
                                )
                        );
                }
        }]);

        return Login;
}(React.Component);

var domContainer = document.querySelector("#login_react");
ReactDOM.render(React.createElement(Login, null), domContainer);