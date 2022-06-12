import ItemDetails from "../../presentationals/item-details/item-details";
import {useEffect, useState} from "react";
import {findById} from "../../../services/products.service";
import {useParams} from "react-router-dom";

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        findById(id)
            .then((p) => setProduct(p))
    }, []);

    return <ItemDetails product={product}/>
}

export default ItemDetailsContainer;