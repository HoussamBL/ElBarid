import "./HeaderProducts.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function HeaderProducts() {
    return React.createElement(
        "div",
        { className: "bgHeader" },
        React.createElement("img", { src: "/Logo2.png", "class": "Logo2" }),
        React.createElement(FiLogOut, { className: "logout" }),
        React.createElement(AiOutlineShoppingCart, { className: "cart" })
    );
}
export default HeaderProducts;