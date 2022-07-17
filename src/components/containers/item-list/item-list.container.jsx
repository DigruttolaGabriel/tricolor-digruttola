import ItemList from "../../presentationals/item-list/item-list";
import {useEffect, useState} from "react";
import {fetchProducts, findProductByCategory} from "../../../services/products.service";
import {useParams} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        id
            ?
            findProductByCategory(id)
                .then(data => setItems(data.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
            :
            fetchProducts()
                .then(data => setItems(data.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
    }, [id])

    return (
        <div className="container-fluid mt-50">
            {
                loading ?
                    <div className="d-flex justify-content-center align-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div> :
                    <ItemList items={items}/>
            }
        </div>
    )
};

export default ItemListContainer;