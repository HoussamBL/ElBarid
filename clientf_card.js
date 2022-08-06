var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clientf_card = function (_React$Component) {
    _inherits(Clientf_card, _React$Component);

    function Clientf_card() {
        _classCallCheck(this, Clientf_card);

        return _possibleConstructorReturn(this, (Clientf_card.__proto__ || Object.getPrototypeOf(Clientf_card)).apply(this, arguments));
    }

    _createClass(Clientf_card, [{
        key: "render",
        value: function render() {
            var clientf_j = JSON.parse(this.props.propsClientf_j);
            console.log(clientf_j);

            return React.createElement(
                "div",
                { "class": "grid-client" },
                clientf_j.map(function (clientf_jj) {

                    return React.createElement(
                        "div",
                        { className: "cardClient" },
                        React.createElement(
                            "div",
                            { className: "grid-card" },
                            React.createElement(
                                "div",
                                { id: "name" },
                                React.createElement(
                                    "span",
                                    null,
                                    clientf_jj.clientf_nom
                                ),
                                React.createElement(
                                    "span",
                                    null,
                                    " ",
                                    clientf_jj.clientf_prenom,
                                    " "
                                )
                            ),
                            React.createElement(
                                "div",
                                { id: "id" },
                                React.createElement(
                                    "span",
                                    null,
                                    clientf_jj.clientf_num
                                )
                            ),
                            React.createElement("div", { id: "other" }),
                            React.createElement(
                                "div",
                                { id: "address" },
                                clientf_jj.clientf_adresse
                            ),
                            React.createElement(
                                "div",
                                { id: "tel" },
                                clientf_jj.clientf_tel
                            ),
                            React.createElement(
                                "select",
                                { id: "reviewAction" },
                                React.createElement(
                                    "option",
                                    { className: "noOrder" },
                                    "No order"
                                ),
                                React.createElement(
                                    "option",
                                    { className: "enCours" },
                                    "En cours"
                                )
                            )
                        )
                    );
                })
            );
        }
    }]);

    return Clientf_card;
}(React.Component);

var domContainer = document.querySelector("#clientf_card_react");
var clientf_j = domContainer.innerHTML;

ReactDOM.render(React.createElement(Clientf_card, { propsClientf_j: clientf_j }), domContainer);