import {Button} from "react-bootstrap";

const CartItem = (props) => {
    return(
        <div className="d-flex flex-column align-items-center">
            <div>
                {props.item.name} - {props.item.quantity} - <Button variant="danger" onClick={props.removeProductFromCart}>Eliminar</Button>
            </div>
        </div>
    )
}

export default CartItem;