import {Card} from "react-bootstrap";
import "../../Item/ItemCounter.css"
import ItemCounter from "../../Item/ItemCounter";

function ItemCard({item}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        $ {item.price}
                    </Card.Text>
                    <ItemCounter stock={item.stock}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;