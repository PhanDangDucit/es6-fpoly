const http = require('http');
// const { open } = require('node:fs/promises');
const { getProducts, addProducts } = require('./firestore');
let datas = [];
async function getDatas() {
    datas = await getProducts();
    return datas;
}

addProducts();

const server = http.createServer(async(req, res)=>{
    console.log("Request is Incoming");
    const responseData = await getDatas();
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
})

server.listen(4000, function() {
    console.log('listening on port:: 4000')
})

