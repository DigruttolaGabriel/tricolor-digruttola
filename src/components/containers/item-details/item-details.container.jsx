import ItemDetails from "../../presentationals/item-details/item-details";
import {useEffect, useState} from "react";
import {findProductById} from "../../../services/products.service";
import {useParams} from "react-router-dom";

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        findProductById(id)
            .then((p) => setProduct(p))
    }, []);

    return (
        <div className="container-fluid">
            <ItemDetails product={product}/>
        </div>
    )
};

export default ItemDetailsContainer;