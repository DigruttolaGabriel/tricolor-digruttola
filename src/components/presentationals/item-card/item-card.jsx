import {Card} from "react-bootstrap";
import "../item-counter/item-counter.css"
import ItemCounterContainer from "../../containers/item-counter/item-counter.container";

const ItemCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        $ {props.item.price}
                    </Card.Text>
                    <ItemCounterContainer stock={props.item.stock}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;