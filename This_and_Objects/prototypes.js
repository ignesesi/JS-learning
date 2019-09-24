
var anotherObject = {
	a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );

console.log(myObject.a); // 2
console.log("a" in myObject);
console.log(myObject.hasOwnProperty("a"));

for(var i in myObject){
    console.log(i,myObject[i]);
}

myObject.a++;
console.log(myObject.a,anotherObject.a);
console.log(myObject.hasOwnProperty("a"));