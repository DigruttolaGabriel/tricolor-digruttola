import CartItemContainer from "../../containers/cart/cart-item.container";
import {Alert} from "react-bootstrap";
import ErrorPage from "../error/error-page/error-page";
import CartCheckOutFormContainer from "../../containers/cart/cart-check-out-form.container";

const Cart = (props) => {
    return(
        <div className="container-fluid mt-50">
            <h2 className="text-center">El Carrito</h2>
            {
                props.orderId &&
                <div className="d-flex justify-content-center align-content-center">
                    <Alert variant={"success"} className="col-3">
                        Tu numero de orden es: {props.orderId}
                    </Alert>
                </div>
            }
            {
                props.products?.length ?
                    <div className="d-flex flex-column justify-content-center align-content-center">
                        {
                            props.products.map(item => (<CartItemContainer key={item.id} item={item} />))
                        }
                        <h3 className="float-end mt-3">
                            Total : {props.total}
                        </h3>
                        <CartCheckOutFormContainer generateOrder={props.generateOrder} />
                    </div> :
                    <ErrorPage message="No hay productos seleccionados actualmente"/>
            }
        </div>
    )
}

export default Cart;