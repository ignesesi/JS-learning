
console.warn("Example 1");
var wantA = true;
var myObject1 = {
    a: 2
};
var idx;
if (wantA) {
    idx = "a";
}
// later
console.log( myObject1[idx] ); // 2



console.warn("Example 2");
var myObject2 = { };

myObject2[true] = "foo";
myObject2[3] = "bar";
myObject2[myObject2] = "baz";

console.log(myObject2["true"]);				// "foo"
console.log(myObject2["3"]);					// "bar"
console.log(myObject2["[object Object]"]);	// "baz"
console.log(myObject2[true]);				// "foo"; true is coerced to string
console.log(myObject2[3]);					// "bar"; 3 is coerced to string



console.warn("Example 3");
var prefix = "foo";

var myObject3 = {
    [prefix + "bar"]: "hello",
    [prefix + "baz"]: "world"
};

console.log(myObject3["foobar"]); // hello
console.log(myObject3["foobaz"]); // world