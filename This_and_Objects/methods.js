
var myObject = {
	foo: function foo() {
		console.log( "foo" );
	}
};

var someFoo = myObject.foo;

console.log(someFoo, '\n\n\n\n\n', myObject.foo);		// function foo(){..}
// function foo(){..}