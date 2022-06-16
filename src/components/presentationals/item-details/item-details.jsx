import ItemCounterContainer from "../../containers/item-counter/item-counter.container";

const ItemDetail = (props) => {
    return (
        <div className="d-flex justify-content-evenly">
            <div className="w-60">
                <img src={props.product.photo} alt="" className="w-100"/>
            </div>
            <div>
                <h2>Nombre: {props.product.name}</h2>
                <h4>Precio: {props.product.price}</h4>
                <ItemCounterContainer stock={props.product.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail
