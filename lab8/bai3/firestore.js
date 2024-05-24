// firestore.js
const { getDatabase, ref, set, push } = require("firebase/database");


const { db } = require('./firebaseConfig.js');
const {collection, getDocs} = require("firebase/firestore/lite")
const addProducts = async () => {
    const products = await ((await fetch("http://localhost:8000/products")).json());
    const db = getDatabase();
    const postListRef = ref(db, 'products');
    const newPostRef = push(postListRef);
    set(newPostRef, products);
};

const getProducts = async (db) => {
    const citiesCol = collection(db, 'products');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
module.exports = {
    getProducts,
    addProducts
}