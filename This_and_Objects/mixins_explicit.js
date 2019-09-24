
var Vehicle = {
	engines: 1,

	ignition: function() {
		console.log( "Turning on my engine." );
	},

	drive: function() {
		this.ignition();
		console.log( "Steering and moving forward!" );
	}
};

var Car = {
	wheels: 4,

	drive: function() {
		Vehicle.drive.call( this );
		console.log( "Rolling on all " + this.wheels + " wheels!" );
    }
};

mixin(Vehicle, Car);

function mixin(source,target){
    for(i in source){
        if(!(i in target)){
            target[i] = source[i];
        }
    }
    return target;
}

var Boat = mixin(Vehicle,{
	engines: 2,
	ignition: function() {
		console.log( "Turning on my ", this.engines, " engines." );
	},

	pilot: function() {
		this.drive();
		console.log( "Speeding through the water with ease!" );
	}
});


console.warn("CAR");
Car.drive();
console.warn("BOAT");
Boat.pilot();