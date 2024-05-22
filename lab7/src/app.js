const fisrtName = 'James';

const person = {
    first: fisrtName
}

console.log(person)

const sayHelloLinting = (fName) => {
    console.log(`Hello linting, ${fName}`);
    console.error(`Hello linting, ${fName}`);
}
sayHelloLinting("Duc")