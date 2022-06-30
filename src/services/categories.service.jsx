import {collection, getDocs, getFirestore, orderBy, query} from "firebase/firestore";

export const fetchCategories = () => {
    const db = getFirestore();
    const queryCollection = collection(db, "categories");
    return getDocs(query(queryCollection, orderBy("name", "asc")));
}