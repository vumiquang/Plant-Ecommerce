import { db } from './firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
} from 'firebase/firestore';

export const plantCollection = collection(db, 'plant');
export const cartCollection = collection(db, 'cart');
export const reviewCollection = collection(db, 'review');

export const getCollection = async (collection) => {
    try {
        const data = await getDocs(collection);
        return data.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });
    } catch (e) {
        return [];
    }
};

export const addCollection = async (
    collection,
    data,
    callback,
    failCallback
) => {
    try {
        const docRef = await addDoc(collection, data);
        const docId = docRef.id;
        callback();
        return docId;
    } catch (e) {
        failCallback();
        return null;
    }
};

export const updateCollection = async (collectionName, id, newData) => {
    //
    const cartDoc = doc(db, collectionName, id);
    await updateDoc(cartDoc, newData);
};

export const deleteCollection = async (collectionName, id) => {
    const collectionRef = doc(db, collectionName, id);
    await deleteDoc(collectionRef);
};

export const getCollectionBy = async (collection, field, condition) => {
    const q = query(collection, where(field, '==', condition));
    try {
        const data = await getDocs(q);
        return data.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });
    } catch (e) {
        return [];
    }
};
