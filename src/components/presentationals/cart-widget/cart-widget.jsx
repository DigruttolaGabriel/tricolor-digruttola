import "./cart-widget.css"

const CartWidget = (props) => {
    return (
        <div>
            <i className="bi bi-cart navbar-icon">
                {
                    props.quantity > 0 &&
                    <span className="badge bg-secondary ms-1">{props.quantity}</span>
                }
            </i>
        </div>
    );
}

export default CartWidget;