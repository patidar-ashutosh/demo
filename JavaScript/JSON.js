/* What is JSON
JSON Full From is JavaScript Object Notation
JSON is a lightweight data-interchange format */

// we write in JSON in two formate
// 1. Object
// Example
/* {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
} */

// 2. array of Object
// Example
/* [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
] */
  

// Hamare pass JSON ke liye 2 in-built method hai joki ham JSON ke saath me use karte hai
// 1st Function
/* JSON.stringify() : joki hame ek object ko json string formate me convert karke deta hai
The JSON.stringify() static method converts a JavaScript value to a JSON string
Syntax :
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space) 
First Parameter -> OBJECT
Second Parameter -> Function with 2 parameter (key and values)
Third Paramter -> Space (means if we add any extra character in starting like: /.*\ etc..) 
*/
// Example
const obj = {
    squadName : "Super hero squad",
    homeTown : "Metro City",
    formed : 2016,
    secretBase : "Super tower",
    active : true,
}

const json1 = JSON.stringify(obj);
console.log(json1);

const json2 = JSON.stringify(obj , function(key,value){
    if(value == true){
        return false;
    }
    else{
        return value;
    }
});
console.log(json2);

const json3 = JSON.stringify(obj , null , '******');
console.log(json3);


// 2nd Function
/* JSON.parse() : joki hame JSON data ko object me convert karke deta hai
convet JSON String into javaScript object
Syntax :
JSON.parse(text)
JSON.parse(text, reviver)
First Parameter -> OBJECT
Second Parameter -> Function with 2 parameter (key and values) */
// Example
const obj1 = {
    squadName : "Super hero squad",
    homeTown : "Metro City",
    formed : 2016,
    secretBase : "Super tower",
    active : true,
}

// first we need to convert obj into JSON formate so we test our parse method
const json = JSON.stringify(obj1);
console.log(json);

// Now use the parse method
const parse1 = JSON.parse(json);
console.log(parse1);

const parse2 = JSON.parse(json, function(key,value){
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else{
        return value;
    }
});
console.log(parse2);


// NOTE : we can use this method to Convert JSON Arrays to string and string to JSON array