const http = require('http');
const { getProducts } = require('./firebaseConfig');
// const cors = require('cors');

const server = http.createServer(async(req, res)=>{
    console.log("Request is Incoming");
    const responseData = await getProducts();
    console.log("responseData::", responseData)
    const jsonContent = JSON.stringify(responseData);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(jsonContent);
})
// server.use(cors())

server.listen(5500, function() {
    console.log('listening on port:: 5500');
})
