import * as method from "./functions.js";
import sum from "./sum_function.js";

const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const sumNode = document.getElementById('sum');

firstNameNode.innerHTML = method.lowercaseString(firstNameNode.innerText);
lastNameNode.innerHTML = method.uppercaseString(lastNameNode.innerText);
sumNode.innerHTML = sum(7, 4);

