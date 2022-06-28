import {useEffect, useState} from "react";
import CartWidget from "../../presentationals/cart-widget/cart-widget";
import {useCartContext} from "../../../contexts/cart/cart.context";

const CartWidgetContainer = () => {
    const { cart } = useCartContext();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(cart.reduce((prev, act) => {
            return prev + act.quantity
        }, 0))
    }, [cart])

    return (
        <CartWidget quantity={quantity}/>
    )
}

export default CartWidgetContainer;