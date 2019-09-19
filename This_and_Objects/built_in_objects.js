
var strPrimitive = "I am a string";
console.log(typeof strPrimitive, strPrimitive instanceof String); // "string" false

var strObject = new String( "I am a string" );
console.log(typeof strObject, strObject instanceof String);	// "object" true

// inspect the object sub-type
console.log(Object.prototype.toString.call( strObject )); // [object String]

console.log( strPrimitive.length );	// 13
console.log( strPrimitive.charAt( 3 ) ); // "m"
                
