import Cart from "../../presentationals/cart/cart";
import {useCartContext} from "../../../contexts/cart/cart.context";

const CartContainer = () => {
    const { cart } = useCartContext();

    return (
        <div className="container-fluid mt-50">
            <Cart products={cart}/>
        </div>
    )
};

export default CartContainer;