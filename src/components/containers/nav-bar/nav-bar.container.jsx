import NavBar from "../../presentationals/nav-bar/nav-bar";
import {fetchCategories} from "../../../services/categories.service";
import {useEffect, useState} from "react";

const NavBarContainer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories()
            .then((data) => {
                setCategories(data);
            });
    }, [])

    return (
        <NavBar categories={categories}/>
    )
}

export default NavBarContainer;