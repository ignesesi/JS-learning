
function foo() {
    console.log( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
var bar = obj.foo; // actually just a function reference to foo!
var a = "oops, global"; // `a` also property on global object
bar(); // "oops, global"

/*
Parameter passing is just an implicit assignment, and since we're passing a function, it's an implicit reference assignment, so the end result is the same as the previous snippet.
*/
function doFoo(fn) {
    // `fn` is just another reference to `foo`

    fn(); // <-- call-site!
}
doFoo( obj.foo ); // "oops, global"


//What if the function you're passing your callback to is not your own, but built-in to the language? No difference, same outcome.
setTimeout( obj.foo, 100 ); // "oops, global"
