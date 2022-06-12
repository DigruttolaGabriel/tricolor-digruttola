import ItemCard from "../presentationals/item-card/ItemCard";

function ItemList(props) {
    return (
        <div style={{ display:"flex"}}>
            {
                props.items.map(item => (<ItemCard key={item.id} item={item} />))
            }
        </div>
    );
}

export default ItemList;