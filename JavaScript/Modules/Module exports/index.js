// yadi ham sirf require(fileName) karte hai to jo file hamne extract kari hai usme jo bhi data hoga wo print hoga
// ham us data use ya modifie nahi kar payenge
// require('./demo.js');

// yadi hame data ko modifiy ya use karna hai to hame use module ka use karke exports karna pade ga
// let variableA = require('./demo.js');
// console.log(variableA);
// variableA = variableA + 20;
// console.log(variableA);


// get multiple data
var obj = require('./demo.js');

obj.demo();
obj.demo1(20,30);