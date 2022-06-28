import {Button} from "react-bootstrap";

const CartItem = (props) => {
    return(
        <div className="d-flex flex-column align-items-center">
            <div className="card mb-1">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.item.photo} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.item.name}</h5>
                            <p className="card-text">{props.item.description}</p>
                            <p className="card-text">Precio: ${props.item.price}</p>
                            <p className="card-text">Cantidad: {props.item.quantity}</p>
                            <p className="card-text"><Button variant="danger" onClick={props.removeProductFromCart}>Eliminar</Button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;