import CartItemContainer from "../../containers/cart/cart-item.container";
import {Alert, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ErrorPage from "../error/error-page/error-page";

const Cart = (props) => {
    return(
        <div className="container-fluid mt-50">
            {
                props.orderId &&
                <div className="d-flex justify-content-center align-content-center">
                    <Alert variant={"success"} className="col-3">
                        Tu numero de orden es: {props.orderId}
                    </Alert>
                </div>
            }
            <h2 className="text-center">El Carrito</h2>
            {
                props.products?.length ?
                    <div>
                        {props.products.map(item => (<CartItemContainer key={item.id} item={item} />))}
                        <h3 className="float-end mt-3">
                            Total : {props.total}
                        </h3>
                        <Button variant="primary" onClick={props.generateOrder}>Generar orden</Button>
                    </div> :
                    <ErrorPage message="No hay productos seleccionados actualmente"/>
            }
        </div>
    )
}

export default Cart;