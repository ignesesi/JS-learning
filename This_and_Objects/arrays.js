
var myArray = [ "foo", 42, "bar" ];
console.log(myArray.length);		// 3
myArray.asdf = "BlaA";
console.log(myArray.length, myArray.asdf);		// 3 Blaa
myArray["45"] = "hi";
console.log(myArray.length, myArray[3], myArray[45]);		// 4 undef hi