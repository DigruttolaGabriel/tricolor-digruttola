import CartItemContainer from "../../containers/cart/cart-item.container";

const Cart = (props) => {
    return(
        <div className="d-flex flex-column align-items-center">
            <h2>El Carrito</h2>
            {
                props.products &&
                props.products.map(item => (<CartItemContainer key={item.id} item={item} />))
            }
        </div>
    )
}

export default Cart;