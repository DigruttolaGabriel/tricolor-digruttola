import {useCartContext} from "../../../contexts/cart/cart.context";
import CartItem from "../../presentationals/cart/cart-item";

const CartItemContainer = (props) => {
    const { cart, removeFromCart } = useCartContext();

    const removeProductFromCart = () => {
        removeFromCart(props.item);
    }

    return (
        <div className="d-flex flex-column">
            <CartItem item={props.item} removeProductFromCart={removeProductFromCart}/>
        </div>
    )
};

export default CartItemContainer;