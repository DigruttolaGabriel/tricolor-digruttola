import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const ErrorPage = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h4 className="my-3">{props.message}</h4>
            <NavLink to={"/products"} className="link-no-decoration">
                <Button variant="primary">Volver a la tienda</Button>
            </NavLink>
        </div>
    )
}

export default ErrorPage;