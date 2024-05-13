const axios = require('axios');
// 1.
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url); 
        results.push(res);
    }
    return results;
}
const url1 = [];
const result1 = fetchUrls(url1);
console.log(result1);

//2.
async function fetchUrlsConcurrency(urls) {
    const results = await Promise.all(
        urls.map(function(url) {
            return axios.get(url);
        })
    )
    return results;
}
const url2 = [];
const result2 = fetchUrlsConcurrency(url2);
console.log(result2);