
console.warn("Magic");
var anotherObject = {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject = Object.create( anotherObject );

myObject.cool(); // "cool!"

console.warn("Internal delegation");
var anotherObject2 = {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject2 = Object.create( anotherObject2 );

myObject2.doCool = function() {
	this.cool(); // internal delegation!
};

myObject2.doCool(); // "cool!"