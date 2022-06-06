function b() {
    var myVar; // myVar = undefined
    
}

function a() {
    var myVar = 2; 
    b();
}

var myVar = 1;
a();

console.log(myVar) // 1