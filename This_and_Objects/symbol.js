
console.warn(" ");
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
console.log(sym1,sym2,sym3);

console.log(Symbol('foo') === Symbol('foo')); // false
console.log(Symbol('foo') == Symbol('foo')); // false

//var sym = new Symbol(); // TypeError

console.warn(" ");
console.log(typeof Symbol() === 'symbol');
console.log(typeof Symbol('foo') === 'symbol');
console.log(typeof Symbol.iterator === 'symbol');

console.warn(" ");
//Symbols are not enumerable in for...in iterations.
var obj = {};

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (var i in obj) {
   console.log(i); // logs "c" and "d"
}

console.warn(" ");
/*
When a Symbol wrapper object is used as a property key, this object will be coerced to its wrapped symbol:
*/
var sym = Symbol('foo');
var obj = {[sym]: 1};
console.log(obj[sym]);            // 1
console.log(obj[Object(sym)]);    // still 1