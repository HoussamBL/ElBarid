import "./HeaderClient.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";


function HeaderClient(){
    return(
        <div className="bgHeader">
           <img src="/Logo2.png" class="Logo2" ></img>
          
<FiLogOut className="logout" />
          

        </div>
    )
}
export default HeaderClient;