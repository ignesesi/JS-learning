
"use strict";

console.warn(" ");
var myObject = {
	a: 2 //descriptors are true
};

console.table(Object.getOwnPropertyDescriptor( myObject, "a" )); 
// {
//    value: 2,
//    writable: true,
//    enumerable: true,
//    configurable: true
// }

Object.defineProperty( myObject, "a", {
    value: 5,
	enumerable: false
} );
console.table(Object.getOwnPropertyDescriptor( myObject, "a" ));


console.warn("DEFAULT {}");
Object.defineProperty( myObject, "b", {}); //descriptors false and value is undefined
console.table(Object.getOwnPropertyDescriptor( myObject, "b" ));



console.warn("CONFIGURABLE: false");
Object.defineProperty( myObject, "c", {
    value: "HALO",
    writable: true,
    enumerable: true,
    configurable: false

});

console.table(Object.getOwnPropertyDescriptor( myObject, "c" ));

Object.defineProperty( myObject, "c", {
    writable: false,
    value: "asd"
    //configurable: true //error
    //enumerable: false //error
});

console.table(Object.getOwnPropertyDescriptor( myObject, "c" ));

myObject.c = 5;

console.warn(myObject.c); //error in strict; else not changed