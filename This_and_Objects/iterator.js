var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();

Object.defineProperty(myArray, "asdf", {
    enumerable: true,
    writable: true,
    configurable: true,
    value: "ASDF"
}); 
console.log(it.next()); // { value:1, done:false }
console.log(it.next()); // { value:2, done:false }
console.log(it.next()); // { value:3, done:false }
console.log(it.next()); // { done:true }

console.warn("for of")
for(var a of myArray){
    console.log(a);
}

console.warn("for in")
for(var i in myArray){
    console.log(myArray[i]);
}



console.warn("OBJECT")
var myObject = {
    value: 42,
    asdf: "ASDF",
    bla: true
};

Object.defineProperty(myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: false,
    value: function (){
        var obj = this;
        var keys = Object.keys(obj);
        var ind = 0;
        return {
            next: function () {
                return {
                    value: obj[keys[ind++]], 
                    done: (ind>keys.length)
                };
            }
        };
    }
});

var it = myObject[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.warn("WHOA");
var it = myObject[Symbol.iterator].call(myArray);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.warn("for of OBJECT");
for(var o of myObject) {
    console.log(o);
}