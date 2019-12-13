/*
From that table, we get the following as the so-called "falsy" values list:

undefined
null
false
+0, -0, and NaN
""

*/

var a = new Boolean( false );
var b = new Number( 0 );
var c = new String( "" );

var d = Boolean( a && b && c );
var e = ( a && b && c )

cl(d)
cl(e)

var a = "false";
var b = "0";
var c = "''";

var d = Boolean( a && b && c );
cl(d)

var a = [];				// empty array -- truthy or falsy?
var b = {};				// empty object -- truthy or falsy?
var c = function(){};	// empty function -- truthy or falsy?

var d = Boolean( a && b && c );
cl(d)