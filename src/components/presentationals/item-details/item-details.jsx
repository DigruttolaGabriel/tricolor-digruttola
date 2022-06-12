const ItemDetail = (props) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <img src={props.product.photo} alt="" className="w-100" />
            </div>
            <div className="col-md-6">
                <h2>Nombre: {props.product.name}</h2>
                <h4>Precio: {props.product.price}</h4>
            </div>
        </div>
    )
}

export default ItemDetail
