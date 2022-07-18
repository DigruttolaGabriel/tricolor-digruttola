import {collection, getFirestore, addDoc} from 'firebase/firestore'

export const generateNewOrder = (order) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    return addDoc(orderCollection, order);
}
