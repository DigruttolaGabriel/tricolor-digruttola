import {useEffect, useState} from "react";
import ItemCard from "./ItemCard";

function ItemList() {
    const data = [
        {
            id: 1,
            name: "Producto 1",
            price: 10,
            stock: 20
        },
        {
            id: 2,
            name: "Producto 2",
            price: 15,
            stock: 5
        },
        {
            id: 3,
            name: "Producto 3",
            price: 25,
            stock: 15
        },
        {
            id: 4,
            name: "Producto 4",
            price: 5,
            stock: 50
        }
    ]
    const [items, setItems] = useState([]);

    function fetchData() {
        return new Promise(resolve => {
            setTimeout(resolve(data), 2000);
        });
    }

    useEffect(() => {
        fetchData()
            .then((data) => {
                setItems(data);
            });
    }, [])

    return (
        <div style={{ display:"flex"}}>
            {
                items.map(item => (<ItemCard key={item.id} item={item} />))
            }
        </div>
    );
}

export default ItemList;