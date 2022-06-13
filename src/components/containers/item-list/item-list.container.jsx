import ItemList from "../../presentationals/item-list/item-list";
import {useEffect, useState} from "react";
import {fetchProducts, findProductByCategory} from "../../../services/products.service";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        id
            ?
            findProductByCategory(id)
                .then((data) => {
                    setItems(data)
                })
            :
            fetchProducts()
                .then((data) => {
                    setItems(data);
                });
    }, [])

    return (
        <div className="container-fluid">
            <ItemList items={items}/>
        </div>
    )
};

export default ItemListContainer;