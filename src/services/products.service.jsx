import {collection, doc, query, where, getDocs, getDoc, getFirestore, documentId, writeBatch} from 'firebase/firestore'

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

export const updateProductsOrderStockBatch = async (order) => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const updateStockQuery = await query(productsCollection,
        where(documentId(), "in", order.items.map(item => item.id)));

    const batch = writeBatch(db);
    await getDocs(updateStockQuery)
        .then(resp => resp.docs.forEach(doc => batch.update(doc.ref, {
            stock: doc.data().stock - order.items.find(item => item.id === doc.id).quantity
        })));

    await batch.commit();
}