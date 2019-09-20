
var myObject = { };

Object.defineProperty(
	myObject,
	"a",
	// make `a` enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	// make `b` NON-enumerable
	{ enumerable: false, value: 3 }
);

console.log(myObject.b); // 3
console.log("b" in myObject); // true
console.log(myObject.hasOwnProperty( "b" )); // true

// .......

for (var k in myObject) {
	console.log( k, myObject[k] );
}
// "a" 2

console.log(myObject.propertyIsEnumerable( "a" )); // true
console.log(myObject.propertyIsEnumerable( "b" )); // false

console.table(Object.keys( myObject )); // ["a"]
console.log(Object.getOwnPropertyNames( myObject )); // ["a", "b"]