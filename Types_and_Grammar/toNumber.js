var a = {
	valueOf: function(){
		return "42";
	}
};

var b = {
	toString: function(){
		return "42";
	}
};

var c = [4,2];
c.toString = function(){
	return this.join( "" );	// "42"
};

var cl = console.log

cl(Number( a ));			// 42
cl(Number( b ));			// 42
cl(Number( c ));			// 42
cl(Number( "" ));			// 0
cl(Number( [] ));			// 0
cl(Number( [ "abc" ] ));	// NaN