import ItemList from "../Item/ItemList";

function ItemListContainer(props) {
    return (
        <div>
            <h2>{ props.welcomeMessage }</h2>
            <ItemList />
        </div>
    );
}

export default ItemListContainer;