
console.warn("Example 1");
function foo() {
    console.log( this.a );
}

var a = 2;
foo.call( null ); // 2


console.warn("Example 2");
function f(a,b) {
    console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
f.apply( null, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = f.bind( null, 2 );
bar( 3 ); // a:2, b:3


console.warn("DMZ");
function dmz(a,b) {
    console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );

// spreading out array as parameters
dmz.apply( ø, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var b = dmz.bind( ø, 2 );
b( 3 ); // a:2, b:3
b( 8 );// a:2, b:8

var c = dmz.bind( ø, 5, 6 );
c( 3 ); // a:5, b:6
c( 8, 7 ); // a:5, b:6



console.warn("Indirection");
function fn() {
    console.log( this.aa );
}

var aa = 2;
var o = { aa: 3, fn: fn };
var p = { aa: 4 };

o.fn(); // 3
(p.fn = o.fn)(); // 2
(p.fn = o.fn).call(p); // 4
(p.fn = o.fn).call(o); // 3
/*
The result value of the assignment expression p.foo = o.foo is a reference to just the underlying function object. 
As such, the effective call-site is just foo(), not p.foo() or o.foo() as you might expect. 
Per the rules above, the default binding rule applies.
*/
