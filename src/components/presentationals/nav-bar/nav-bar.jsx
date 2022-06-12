import "./nav-bar.css"
import CartWidget from "../cart/cart-widget";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li style={{ float: "right" }}><a className="active" href="#about">Tricolor</a></li>
                <li style={{ float: "right" }}><CartWidget/></li>
            </ul>
        </div>
    );
}

export default NavBar;