
"use strict";
function Vehicle() {
	var engines = 1;

	function ignition() {
		console.log( "Turning on my engine." );
	}

	function drive() {
        if(this !=  undefined){
            this.ignition();
        }else{
            ignition();
        }
        console.log( "Steering and moving forward!" );
    }
    return {engines: engines, ignition: ignition, drive: drive};
};

function Car(){
    var car = new Vehicle();
    
    car.wheels = 4;

    var vehDrive = car.drive;

	car.drive = function () {
		vehDrive();
        console.log( "Rolling on all " + this.wheels + " wheels!" );
    }
    return car;
};
var brum = Car();

function Boat(){
    var boat = new Vehicle();
	boat.engines = 2;
	boat.ignition = function() {
		console.log( "Turning on my ", this.engines, " engines." );
    }
    boat.pilot = function() {
		boat.drive();
		console.log( "Speeding through the water with ease!" );
    }
    return boat;
};

var boat = Boat();


console.warn("CAR");
brum.drive();
console.warn("BOAT");
boat.drive();
boat.pilot();