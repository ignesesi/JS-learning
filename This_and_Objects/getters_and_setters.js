
var obj = {
	// define a getter for `a`
    _a: 5,
    get c() {
		return 2;
    },
    get a() {
		return this._a;
	},

	// define a setter for `a`
	set a(val) {
		this._a = val;
	}
    
};

Object.defineProperty(
	obj,	// target
	"b",		// property name
	{			// descriptor
        // define a getter for `b`
		get: function(){ return this._b; },
        set: function(new_b) { this.b = new_b; },
		// make sure `b` shows up as an object property
		enumerable: true,
        //value: "Hello"
	}
);

console.log(obj.a, obj.b, obj.c); // 2 4