
//"use strict";

console.warn("DELETE");
var Employee = {
  firstname: "John",
  lastname: "Doe"
}

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined

console.warn("configurable: true");
var myObject = {
	a: 2
};

console.log(myObject.a);				// 2
delete myObject.a;
console.log(myObject.a);				// undefined

console.warn("configurable: true");
Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: false,
	enumerable: true
} );

console.log(myObject.a);				// 2
delete myObject.a; //error in strict
console.log(myObject.a);				// 2