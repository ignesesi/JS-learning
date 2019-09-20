
var myObject = {
	a: undefined
};

console.warn("property");
console.log(myObject.a); // undefined
console.log(myObject.b); // undefined

console.warn("operator in");
console.log("a" in myObject); // true
console.log("b" in myObject); // false

console.warn("hasOwnProperty");
console.log(myObject.hasOwnProperty( "a" )); // true
console.log(myObject.hasOwnProperty( "b" )); // false

console.warn("ARRAY");
console.log(4 in [2,4,6]);
console.log(4 in [2,4,6,7,8,9]);