function Foo(name) {
	this.name = name;
}

Foo.prototype.myName = function() {
	return this.name;
};

function Bar(name,label) {
	Foo.call( this, name );
	this.label = label;
}

// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
// pre-ES6
// throws away default existing `Bar.prototype`
Bar.prototype = Object.create( Foo.prototype );

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!


// ES6+
// modifies existing `Bar.prototype`
//Object.setPrototypeOf( Bar.prototype, Foo.prototype );

Bar.prototype.myLabel = function() {
	return this.label;
};

var a = new Bar( "a", "obj a" );

console.log(a.myName()); // "a"
console.log(a.myLabel()); // "obj a"

//BAD!!!
// doesn't work like you want!
//Bar.prototype = Foo.prototype;
// works kinda like you want, but with
// side-effects you probably don't want :(
//Bar.prototype = new Foo();