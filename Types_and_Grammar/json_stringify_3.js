var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
};


var m = JSON.stringify( a, ["b","c"] ); // "{"b":42,"c":"42"}"
console.log(m)

m = JSON.stringify( a, function(k,v){
	if (k !== "c") return v;
} ); // "{"b":42,"c":"42"}"
console.log(m)

m = JSON.stringify( a, null, 3 );
// "{
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }"
console.log(m)

m = JSON.stringify( a, null, "-----" );
// "{
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }"

console.log(m)
