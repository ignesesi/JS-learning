

console.warn("ARRAY");
var myArray = [ 1, 2, 3, "hello" ];
myArray.asdf = "bla"
console.log(myArray.length);
console.table(Object.keys(myArray));

console.warn("OBJECT");
var myObject = {a:2,b:3 };
console.log(myObject.length);
myObject.length = Object.keys(myObject).length;
console.log(myObject.length);
console.table(Object.keys(myObject));

console.warn("for in ARRAY");
for(var k in myArray){
    console.log(k, myArray[k]);
}

console.warn("for in OBJECT");
for(var k in myObject){
    console.log(k, myObject[k]);
}


console.warn("for ARRAY");
for (var i = 0; i < myArray.length; i++) {
	console.log( myArray[i] );
}

console.warn("for of ARRAY");
for (var v of myArray) {
	console.log( v );
}


console.warn("forEach");
console.warn("some");
console.warn("every");
