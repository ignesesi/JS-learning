
var cl = console.log
var cw = console.warn
"use strict";
//####################################################
var a = "foo";
var b = ["f","o","o"];

cw("length")
cl(a.length);							// 3
cl(b.length);							// 3

cw("indexOf")
cl(a.indexOf( "o" ));					// 1
cl(b.indexOf( "o" ));					// 1

//####################################################
var c = a.concat( "bar" );			// "foobar"
var d = b.concat( ["b","a","r"] );	// ["f","o","o","b","a","r"]
cw("concat")
cl(a === c);							// false
cl(b === d);							// false

cl(a, c);									// "foo"
cl(b, d);									// ["f","o","o"]

//####################################################
a[1] = "O";
b[1] = "O";
cw("immutable")
cl(a); // "foo"
cl(b); // ["f","O","o"]

cw("upper case")
c = a.toUpperCase();
cl(a === c);	// false
cl(a);			// "foo"
cl(c);			// "FOO"

cw("push")
//a.push( "!" ) //error
b.push( "!" );
cl(a)
cl(b);			// ["f","O","o","!"]

cw("join and map")
cl(a.join);			// undefined
cl(a.map);			// undefined

var c = Array.prototype.join.call( a, "-" );
var d = Array.prototype.map.call( a, function(v){
	return v.toUpperCase() + ".";
} ).join( "" );
cl(a)
cl(c);				// "f-o-o"
cl(d);				// "F.O.O."

cw("reverse")
cl(a.reverse);		// undefined

b.reverse();	// ["!","o","O","f"]
cl(b);				// ["!","o","O","f"]

//cl(Array.prototype.reverse.call( a )); //error
// still returns a String object wrapper (see Chapter 3)
// for "foo" :(

var c = a
// split `a` into an array of characters
.split( "" )
// reverse the array of characters
.reverse()
// join the array of characters back to a string
.join( "" );

cl(c); // "oof"