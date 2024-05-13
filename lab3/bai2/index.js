var arr = [1, 2, 3, 4, 5, 6, 7];

const numElements = arr.length - 1;
let total = 0;

const sum = (arr, n) => {
    if(n  < 0) {
        return total;
    };
    total += arr[n];
    return sum(arr, n-1);
}
const value = sum(arr, numElements);
console.log("sum:", value);