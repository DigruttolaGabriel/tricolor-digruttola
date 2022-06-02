import "./NavBar.css"
import CartWidget from "../Cart/CartWidget";

function NavBar() {
    const welcomeMessage = "Bienvenido al carrito"

    return (
        <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li style={{ float: "right" }}><a className="active" href="#about">Tricolor</a></li>
                <li style={{ float: "right" }}><CartWidget welcomeMessage = { welcomeMessage }/></li>
            </ul>
        </div>
    );
}

export default NavBar;