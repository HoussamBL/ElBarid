import "./HeaderProducts.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";


function HeaderProducts(){
    return(
        <div className="bgHeader">
           <img src="/Logo2.png" class="Logo2" ></img>
          
<FiLogOut className="logout" />
<AiOutlineShoppingCart  className="cart" />
        

        </div>
    )
}
export default HeaderProducts;