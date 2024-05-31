// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, child, get } = require("firebase/database");
const {firebaseConfig} = require("./firebase");
  
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function getProducts()  {
    const dbRef = ref(db);
    const datas = await get(child(dbRef, "products"));
    return datas.val();
}

module.exports = {
    db,
    getProducts
}