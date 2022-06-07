import Item from "../Item/Item";

function ItemListContainer(props) {
    return (
        <div>
            <h2>{ props.welcomeMessage }</h2>
            <Item />
        </div>
    );
}

export default ItemListContainer;