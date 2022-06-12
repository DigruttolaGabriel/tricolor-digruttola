import {Button, ButtonGroup} from "react-bootstrap";
import "../item-counter/item-counter.css"

const ItemCounter = (props) => {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="danger" onClick={props.decrement}>-</Button>
                <span id={"count-text"}>{props.count}</span>
                <Button variant="primary" onClick={props.increment}>+</Button>
            </ButtonGroup>
        </div>
    );
}

export default ItemCounter;