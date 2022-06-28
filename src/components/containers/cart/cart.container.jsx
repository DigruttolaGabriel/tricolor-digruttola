import Cart from "../../presentationals/cart/cart";
import {useCartContext} from "../../../contexts/cart/cart.context";
import {useState, useEffect} from "react";

const CartContainer = () => {
    const { cart } = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((prev, act) => {
            return prev + act.price * act.quantity
        }, 0))
    }, [cart])

    return (
        <div className="container-fluid mt-50">
            <Cart products={cart} total={total}/>
        </div>
    )
};

export default CartContainer;