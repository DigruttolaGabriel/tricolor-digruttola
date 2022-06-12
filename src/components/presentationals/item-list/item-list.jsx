import ItemCard from "../item-card/item-card";
import {Link, NavLink} from "react-router-dom";

const ItemList = (props) => {
    return (
        <div style={{ display:"flex"}}>
            {
                props.items.map(item => (<NavLink to={`/products/${item.id}`}><ItemCard key={item.id} item={item} /></NavLink>))
            }
        </div>
    );
}

export default ItemList;