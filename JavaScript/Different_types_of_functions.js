// JavaScript supports various types of functions.


// 1. Named Function Declaration:
function myFunction() {
  // function body
}


// 2. Anonymous Function: Anonymous Function yani ki jis functions ka name nahi hota hai.
// usse function ko name dene ki jaga pe ham use ek variable ke saathe me assign kar dete hai
var myFunction = function() {
  // function body
};


// 3. Function Expression:
var myFunction = function expression() {
  // function body
};
var multiply = function(x, y) {
    return x * y;
  };
  
var result = multiply(3, 4); // result will be 12  


// 4. Arrow Function: Arrow Function is a way to write a function expressions.
// Arrow functions were introduced in ECMAScript 6 (ES6)
const myFunction = () => {
  // function body
};


// 5. Function Constructor: Function Constructor hai wo refers karta hai ese function ko
// jiska use karke ham object ko initialize ya create kar sakte hai
var myFunction = new Function('a', 'b', 'return a + b');
// Function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}  
// Creating instances using the constructor
var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);

console.log(person1); // { name: 'John', age: 25 }
console.log(person2); // { name: 'Jane', age: 30 }
  

// 6. Immediately Invoked Function Expression (IIFE):
(function() {
  // code executed immediately
})();


// 7.Generator Function:
function* myGenerator() {
  // generator function body
}


// 8. Recursive Function:
// A function that calls itself, either directly or indirectly.

// 9.Callback Function:
// A function passed as an argument to another function and executed later.

// 10. Higher-Order Function:
// A function that takes one or more functions as arguments or returns a function.

// 11. First-Class Functions:
// In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

// 12. Closure:
// A function that has access to variables from its outer (enclosing) scope, even after the outer function has finished execution.

// These are some of the common types of functions in JavaScript. Each serves a specific purpose and can be used in different scenarios depending on the requirements of your code.