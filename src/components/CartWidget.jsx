import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
const {cartQuantity}=useContext(CartContext)
    return(
        <div>
            <FaShoppingCart fontSize={"1.8rem"} color={"#94546c"} />
            <span>{cartQuantity()}</span>
        </div>
    )
}

export default CartWidget