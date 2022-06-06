b()            // Hello World!
console.log(a) // undefined - why? - See notes on Hoisting
// Hint: Creation Phase and Execution Phase of the Execution Context

var a = 'Hello world!'

function b(){
    console.log('Hello world!')
}