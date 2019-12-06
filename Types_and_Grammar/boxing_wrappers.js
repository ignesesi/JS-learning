var a = "abc";
var b = new String( a );
var c = Object( a );

var cl = console.log

console.warn("typeof")
cl(typeof a); // "string"
cl(typeof b); // "object"
cl(typeof c); // "object"

console.warn("instanceof")
cl(a instanceof String); // true
cl(b instanceof String); // true
cl(c instanceof String); // true
cl(String instanceof Object); // true

console.warn("[object String]")
cl(Object.prototype.toString.call( a )); // "[object String]"
cl(Object.prototype.toString.call( b )); // "[object String]"
cl(Object.prototype.toString.call( c )); // "[object String]"