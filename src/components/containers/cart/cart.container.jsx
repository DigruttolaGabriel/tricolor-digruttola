import Cart from "../../presentationals/cart/cart";
import {useCartContext} from "../../../contexts/cart/cart.context";
import {useState, useEffect} from "react";
import {collection, getFirestore, addDoc, query, where, documentId, writeBatch, getDocs} from "firebase/firestore";

const CartContainer = () => {
    const { cart } = useCartContext();
    const [total, setTotal] = useState(0);
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        setTotal(cart.reduce((prev, act) => {
            return prev + act.price * act.quantity
        }, 0))
    }, [cart])

    async function generateOrder(e) {
        e.preventDefault();
        let order = {};

        order.client = {name: "name", email: "email"};
        order.total = total;

        order.items = cart.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price * item.quantity;

            return {id, name, price};
        });

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
            .then(resp => setOrderId(resp.id));

        const productsCollection = collection(db, "products");
        const updateStockQuery = await query(productsCollection,
            where(documentId(), "in", cart.map(item => item.id)));

        const batch = writeBatch(db);
        await getDocs(updateStockQuery)
            .then(resp => resp.docs.forEach(doc => batch.update(doc.ref, {
                stock: doc.data().stock - cart.find(item => item.id === doc.id).quantity
            })));

        await batch.commit();
    }

    return (
        <div className="container-fluid mt-50">
            <Cart products={cart} total={total} generateOrder={generateOrder} orderId={orderId}/>
        </div>
    )
};

export default CartContainer;