function anotherFunction() { /*..*/ }

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,	// reference, not a copy!
	c: anotherArray,	// another reference!
	d: anotherFunction
};

anotherArray.push( anotherObject, myObject );//how to coppy

/*
//JSON
//error: circular reference
var newObj = JSON.parse( JSON.stringify( myObject ) );
*/

//copy enumerable with = , keeps the references
//var newObj = Object.assign( {}, myObject );

console.log(newObj.a);						// 2
console.log(newObj.b === anotherObject, newObj.b);		// true
console.log(newObj.c === anotherArray, newObj.c);		// true
console.log(newObj.d === anotherFunction, newObj.d);	// true