import "./NavBar.css"

function NavBar() {
    return (
        <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li style={{ float: "right" }}><a className="active" href="#about">Tricolor</a></li>
            </ul>
        </div>
    );
}

export default NavBar;