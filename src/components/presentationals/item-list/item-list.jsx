import ItemCard from "../item-card/item-card";

const ItemList = (props) => {
    return (
        <div style={{ display:"flex"}}>
            {
                props.items.map(item => (<ItemCard key={item.id} item={item} />))
            }
        </div>
    );
}

export default ItemList;