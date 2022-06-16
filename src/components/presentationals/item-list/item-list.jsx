import ItemCard from "../item-card/item-card";

const ItemList = (props) => {
    return (
        <div className="d-flex justify-content-around">
            {
                props.items.map(item => (<ItemCard key={item.id} item={item} />))
            }
        </div>
    );
}

export default ItemList;