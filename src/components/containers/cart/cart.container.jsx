import Cart from "../../presentationals/cart/cart";
import {useCartContext} from "../../../contexts/cart/cart.context";
import {useState, useEffect} from "react";
import {generateNewOrder} from "../../../services/orders.service";
import {updateProductsOrderStockBatch} from "../../../services/products.service";

const CartContainer = () => {
    const { cart, resetCart } = useCartContext();
    const [total, setTotal] = useState(0);
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        setTotal(cart.reduce((prev, act) => {
            return prev + act.price * act.quantity
        }, 0))
    }, [cart])

    async function generateOrder(client) {
        let order = {};

        order.client = {
            name: client.name,
            lastname: client.lastname,
            phone: client.phone,
            email: client.email
        };

        order.items = cart.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const quantity = item.quantity;

            return {id, name, price, quantity};
        });

        generateNewOrder(order)
            .then(resp => setOrderId(resp.id));

        await updateProductsOrderStockBatch(order);

        resetCart();
    }

    return (
        <div className="container-fluid mt-50">
            <Cart products={cart} total={total} generateOrder={generateOrder} orderId={orderId}/>
        </div>
    )
};

export default CartContainer;