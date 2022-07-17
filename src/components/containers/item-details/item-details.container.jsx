import ItemDetails from "../../presentationals/item-details/item-details";
import {useEffect, useState} from "react";
import {findProductById} from "../../../services/products.service";
import {useParams} from "react-router-dom";
import {useCartContext} from "../../../contexts/cart/cart.context";
import {Spinner} from "react-bootstrap";
import ErrorPage from "../../presentationals/error/error-page/error-page";

const ItemDetailsContainer = () => {
    const { cart, addToCart } = useCartContext();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        findProductById(id)
            .then((data) => {
                if (data.data())
                    setProduct({ id: data.id, ...data.data() })
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [id]);

    const addProductToCart = (quantity) => addToCart({...product, quantity: quantity})

    return (
        <div className="container-fluid mt-50">
            {
                loading ?
                    <div className="d-flex justify-content-center align-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div> :
                    product.id ?
                        <ItemDetails product={product} addProductToCart={addProductToCart}/> :
                        <ErrorPage message="El producto seleccionado no existe"/>
            }
        </div>
    )
};

export default ItemDetailsContainer;