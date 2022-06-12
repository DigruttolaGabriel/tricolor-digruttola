import ItemList from "../../presentationals/item-list/item-list";
import {useEffect, useState} from "react";
import {fetchData} from "../../../services/products.service";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setItems(data);
            });
    }, [])

    return (
        <div>
            <h2>{ props.welcomeMessage }</h2>
            <ItemList items={items}/>
        </div>
    );
}

export default ItemListContainer;