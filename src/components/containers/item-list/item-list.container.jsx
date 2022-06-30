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
                .then(data => setItems(data.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(error => console.log(error))
            :
            fetchProducts()
                .then(data => setItems(data.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(error => console.log(error));
    }, [id])

    return (
        <div className="container-fluid mt-50">
            <ItemList items={items}/>
        </div>
    )
};

export default ItemListContainer;