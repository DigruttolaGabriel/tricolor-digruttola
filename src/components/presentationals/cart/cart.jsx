import CartItemContainer from "../../containers/cart/cart-item.container";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Cart = (props) => {
    return(
        <div className="container-fluid mt-50">
            <h2 className="text-center">El Carrito</h2>
            {
                props.products?.length ?
                    <div>
                        {props.products.map(item => (<CartItemContainer key={item.id} item={item} />))}
                        <h3 className="float-end mt-3">
                            Total : {props.total}
                        </h3>
                    </div>
                    :
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h4 className="my-3">No hay productos actualemente</h4>
                        <NavLink to={"/products"} className="link-no-decoration">
                            <Button variant="primary">Volver a la tienda</Button>
                        </NavLink>
                    </div>
            }
        </div>
    )
}

export default Cart;