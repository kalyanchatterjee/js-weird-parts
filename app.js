console.log('hello!');

let x = NaN

console.log(typeof x); // prints number, a primitive

let y 

console.log(y) // undefined

let Obj = {
    key1: 'value 1', 
    key2: 'value 2',
    key3: true,
    key4: 32,
    key: {},
    key6: function(){} // function inside an object is called a 'method'
}

// JavaScript is loosely typed. TypeScript comes in handy.

// Global Exection Context - the 'this' special variable is created for you by the JavaScript engine
// In Global Execution Context 'this' is the same as the window object (client side JavaScript)
console.log(this)
console.log(this === window) //true

// Concept: The following two variables anotherLargeVariableName and someGiantAssBigFunction are not inside a function. 
// In JavaScript Global referes to anything that's not inside a function. 
// Thus, the two variables get attached to the Global Execution Context

var anotherLargeVariableName = 'Hello world';
function someGiantAssBigFunction() {}

console.log(window)




