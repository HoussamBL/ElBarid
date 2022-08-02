import "./HeaderClient.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function HeaderClient() {
    return React.createElement(
        "div",
        { className: "bgHeader" },
        React.createElement("img", { src: "/Logo2.png", "class": "Logo2" }),
        React.createElement(FiLogOut, { className: "logout" })
    );
}
export default HeaderClient;