
var cl = console.log

cl(JSON.stringify( 42 ));	// "42"
cl(JSON.stringify( "42" ));	// ""42"" (a string with a quoted string value in it)
cl(JSON.stringify( null ));	// "null"
cl(JSON.stringify( true ));	// "true"

cl(JSON.stringify( undefined ));					// undefined
cl(JSON.stringify( function(){} ));					// undefined

cl(JSON.stringify( [1,undefined,function(){},4] ));	// "[1,null,null,4]"
cl(JSON.stringify( { a:2, b:function(){} } ));