let promise = new Promise(
    function(resolve, reject) { 
        resolve(1);
        setTimeout(() => resolve(2), 3000);
    }
);
console.log("-------------> TH1: log resolve(1)");
promise.then((data) => console.log("data of resolve(1)::", data));

setTimeout(() => {
    console.log("-------------> TH2: log resolve(1), resolve(2)")
}, 3000);

let promise1 = new Promise(
    function(resolve, reject) { 
        resolve(1);
    }
);
let promise2 = new Promise(
    function(resolve, reject) { 
        setTimeout(() => resolve(2), 3000);
    }
);
const immediateLogPromise = Promise.all([promise1, promise2]);

immediateLogPromise.then(([data1, data2]) => 
    console.log("data of resolve(1)::", data1,
    "data of resolve(2)  with setTimout::", data2)
);