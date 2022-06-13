import {Button, Card} from "react-bootstrap";
import "../item-counter/item-counter.css"
import {NavLink} from "react-router-dom";

const ItemCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.photo} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        {props.item.description}
                    </Card.Text>
                    <Card.Text>
                        $ {props.item.price}
                    </Card.Text>
                    <NavLink to={`/products/${props.item.id}`} className="link-no-decoration">
                        <Button variant="primary">Ver detalle</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;