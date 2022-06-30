import {collection, doc, query, where, getDocs, getDoc, getFirestore} from 'firebase/firestore'

export const fetchProducts = () => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    return getDocs(queryCollection);
}

export const findProductById = (id) => {
    const db = getFirestore();
    const query = doc(db, "products", id);
    return getDoc(query);
}

export const findProductByCategory = (category) => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    return getDocs(query(queryCollection, where("category", "==", category)));
}