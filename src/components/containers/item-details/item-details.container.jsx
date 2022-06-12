import ItemDetails from "../../presentationals/item-details/item-details";
import {useEffect, useState} from "react";
import {findById} from "../../../services/products.service";

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        findById(1)
            .then((p) => setProduct(p))
    }, []);

    return <ItemDetails product={product}/>
}

export default ItemDetailsContainer;