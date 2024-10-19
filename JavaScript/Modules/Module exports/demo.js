/*
let a = 10;
console.log("this is only print the data");
console.log("we can not modifiy it");
console.log(a);
*/


/*
let a = 10;
console.log(a);

// module.exports yani ki ham jo a variable hai usse kisi dusre file me import karna chalte hai
// is liye yaha se ham module.exports kar rahe hai
module.exports = a;
*/


// yadi hame multiple data to export karna ho tab ham usse ek object ke formate me return kar sakte hai
function demo(){
    console.log('this is non parameterize function');
}

function demo1(a,b){
    console.log(a+b);
}

/*module.exports = {
    demo,
    demo1,
}*/
// another way to write above this is
/*module.exports = {
    demo : demo,
    demo1 : demo1,
};*/

/*
yadi hame object pass na karke kisi or way se karna ho to bhi ham kar sakte hai
ye jo way hai wo recommand way bhi hai exports karne ka
Syntax = module.exports.Aiya e name je name thi aapde property ne bhiji file na use karva ma gi ye chiye
pachi = pachi e property jene aapde exports karva magiye chiye
*/
module.exports.demo = demo;
module.exports.demo1 = demo1;

// shorthand to write this is
// only write exports not use module
/*
exports.demo = demo;
exports.demo1 = demo1;
*/