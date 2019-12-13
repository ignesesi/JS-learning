
var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );
print(+d); // 1408369986000

var ts1 = +new Date();
var ts2 = new Date().getTime();
// var timestamp = (new Date()).getTime();
// var timestamp = (new Date).getTime();

var ts3 = Date.now();

print(ts1,ts2,ts3)

/*
///polyfill
if (!Date.now) {
	Date.now = function() {
		return +new Date();
	};
}
*/