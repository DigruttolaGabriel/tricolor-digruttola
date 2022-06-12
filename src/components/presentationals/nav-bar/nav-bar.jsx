import "./nav-bar.css"
import CartWidget from "../cart/cart-widget";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={`/products`} activeClassName="active">Productos</NavLink></li>
                <li style={{ float: "right" }}><a className="active" href="#about">Tricolor</a></li>
                <li style={{ float: "right" }}><CartWidget/></li>
            </ul>
        </div>
    );
}

export default NavBar;