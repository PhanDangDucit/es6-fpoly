var fs = require('fs');
var axios = require('axios');

fs.readFile(
    './data.json',
    { encoding: 'utf8'},
    function(err, data) {
        console.log('Data loaded from disk', data);

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function(res) {
                console.log('Data downloaded from url', res.data);
            })
    }
)