import CheckOutForm from "../../presentationals/check-out-form/check-out-form";
import {useState} from "react";

const CartCheckOutFormContainer = (props) => {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState("");
    const [hasSubmit, setHasSubmit] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const validateEmail = () => {
        if (inputs.email) {
            if (inputs.email !== inputs.emailConfirmation) {
                setError("El email debe coincidir")
                setHasSubmit(false);
                return false;
            }
            else {
                setError("")
                return true;
            }
        }
    }

    const generateOrder = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setHasSubmit(true);

        if (validateEmail()) {
            const client = {
                name: inputs.name,
                lastname: inputs.lastname,
                phone: inputs.phone,
                email: inputs.email
            }

            console.log("entra")
            props.generateOrder(client);
        }
    }

    return (
        <CheckOutForm generateOrder={generateOrder} onChange={handleChange} inputs={inputs} error={error} hasSubmit={hasSubmit}/>
    )
}

export default CartCheckOutFormContainer;