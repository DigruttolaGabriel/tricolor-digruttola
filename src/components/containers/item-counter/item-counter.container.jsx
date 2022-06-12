import {useState} from "react";
import ItemCounter from "../../presentationals/item-counter/item-counter";

const ItemCounterContainer = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => count < props.stock && setCount(count + 1)
    const decrement = () => count > 0 && setCount(count - 1)

    return <ItemCounter count={count} increment={increment} decrement={decrement}/>
}

export default ItemCounterContainer;