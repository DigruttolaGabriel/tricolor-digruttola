import ItemDetails from "../../presentationals/item-details/item-details";
import {useEffect, useState} from "react";
import {findProductById} from "../../../services/products.service";
import {useParams} from "react-router-dom";
import {useCartContext} from "../../../contexts/cart/cart.context";

const ItemDetailsContainer = () => {
    const { cart, addToCart } = useCartContext();
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        findProductById(id)
            .then((data) => setProduct({ id: data.id, ...data.data() }))
            .catch((error) => console.log(error));
    });

    const addProductToCart = (quantity) => addToCart({...product, quantity: quantity})

    return (
        <div className="container-fluid mt-50">
            <ItemDetails product={product} addProductToCart={addProductToCart}/>
        </div>
    )
};

export default ItemDetailsContainer;