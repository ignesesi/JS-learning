function Foo() {
	console.log("Function");
}

Foo.prototype.value=3;

var a = new Foo();
//a(); //a is not a function
console.log("PROTOTYPE",Foo.prototype);
console.log("AAAAAA",a);
console.log("Foo.const: ", Foo.constructor);
console.log(Object.getPrototypeOf(a) === Foo.prototype); // true
console.log(Foo.prototype.constructor === Foo); // true
console.log(a.constructor === Foo); // true
console.log("constructor" in a);
console.log(a.hasOwnProperty("constructor"));

console.warn(" ");
a.constructor();
Foo.prototype.constructor();
Foo.constructor();
console.log("Foo.const: ", Foo.constructor);
console.log(a.value);
console.log("value" in a);
console.log(a.hasOwnProperty("value"));

console.warn("BBB");
var b = Object.create(Foo.prototype);

console.log(b.value);
console.log("value" in b);
console.log(b.hasOwnProperty("value"));

console.warn("A1");
Foo.prototype = { /* .. */ }; // create a new prototype object

var a1 = new Foo();
console.log(a1.constructor === Foo); // false!
console.log(a1.constructor === Object); // true!
console.log(a.constructor === Foo); // true! because a copy was created
console.log(a.constructor === Object); // false!