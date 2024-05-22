var fs = require('fs');
var axios = require('axios');

fs.readFile(
    './db.json',
    { encoding: 'utf8'},
    async function(err, data) {
        console.log('Data loaded from disk', data);

        const datas = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
         
        console.log('Data downloaded from url', datas.data);
    }
)