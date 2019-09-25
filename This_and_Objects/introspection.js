function Foo() {
	// ...
}

var a = new Foo();
console.log(a instanceof Foo);
var a1 = Object.create(Foo.prototype);
console.log(a1 instanceof Foo);

console.warn("IS RELATED TO");
function isRelatedTo(o1, o2) {
	function F(){}
	F.prototype = o2;
	return o1 instanceof F;
}

var a2 = {};
var a3 = Object.create( a2 );

console.log(isRelatedTo( a3, a2 )); // true
console.log(isRelatedTo( a3, a )); // false

console.warn("IS PROTOTYPE OF");
console.log(a3.isPrototypeOf(a2));
console.log(a2.isPrototypeOf(a3));

console.warn("GET PROTOTYPE OF");
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(a1));
console.log(Object.getPrototypeOf(a2));
console.log(Object.getPrototypeOf(a3));
console.log(Object.getPrototypeOf(Foo));

console.warn("__proto__");
console.log(a.__proto__);
console.log(a1.__proto__);
console.log(a2.__proto__);
console.log(a3.__proto__);
console.log(Foo.__proto__.__proto__.__proto__);
console.log(Object.__proto__);

console.warn("prototype"); //only for functions
console.log(a.prototype);
console.log(a1.prototype);
console.log(a2.prototype);
console.log(a3.prototype);
console.log(Foo.prototype);
console.log(Object.prototype.__proto__);

/*
Object.defineProperty( Object.prototype, "__proto__", {
	get: function() {
		return Object.getPrototypeOf( this );
	},
	set: function(o) {
		// setPrototypeOf(..) as of ES6
		Object.setPrototypeOf( this, o );
		return o;
	}
} );
*/
