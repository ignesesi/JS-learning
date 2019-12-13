var a = "42";
var b = "42px";

cl(Number( a ));	// 42
cl(parseInt( a ));	// 42

cl(Number( b ));	// NaN
cl(parseInt( b ));	// 42

var h = "09";
var y = "08";

var hour = parseInt( h, 8 );
var minute = parseInt( y, 8 );

console.log( "The time you selected was: " + hour + ":" + minute);

var hour = parseInt( h, 10 );
var minute = parseInt( y, 10 );

cl(parseInt( 1/0, 19 )); // 18

cl(parseInt( new String( "42") ));

var a = {
	num: 21,
	toString: function() { return String( this.num * 2 ); }
};

cl(parseInt( a )); // 42

cl(parseInt( 0.000008 ));		// 0   ("0" from "0.000008")
cl(parseInt( 0.0000008 ));		// 8   ("8" from "8e-7")
cl(parseInt( false, 16 ));		// 250 ("fa" from "false")
cl(parseInt( parseInt, 16 ));	// 15  ("f" from "function..")

cl(parseInt( "0x10" ));			// 16
cl(parseInt( "103", 2 ));		// 2

