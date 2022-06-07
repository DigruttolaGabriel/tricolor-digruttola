import {useState} from "react";
import {Button, ButtonGroup} from "react-bootstrap";
import "./Item.css"

function Item() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="danger" onClick={decrement}>-</Button>
                <span id={"count-text"}>{count}</span>
                <Button variant="primary" onClick={increment}>+</Button>
            </ButtonGroup>
        </div>
    );
}

export default Item;