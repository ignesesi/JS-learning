
debugger;
function baz() {
    debugger;
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    debugger;
    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    debugger;
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    //debug(foo);// only in console
    console.log( "foo" );
}
//debugger;
baz(); // <-- call-site for `baz`
//debugger;


console.todo = function(msg) {
    console.log(' % c % s % s % s', 'color: yellow; background - color: black;', '–', msg, '–');
}

console.important = function(msg) {
    console.log(' % c % s % s % s', 'color: brown; font - weight: bold; text - decoration: underline;', '–', msg, '–');
}

console.todo("This is something that' s need to be fixed");
console.important('This is an important message');

console.warn("Warning");
console.error("Error");
console.info("Info");
console.debug("Debug");
console.trace(foo);

var animals = [
    { animal: 'Horse', name: 'Henry', age: 43 },
    { animal: 'Dog', name: 'Fred', age: 13 },
    { animal: 'Cat', name: 'Frodo', age: 18 }
];

console.table(animals);

console.time('Timer1');

var items = [];

for(var i = 0; i < 100000; i++){
items.push({index: i});
}

console.timeEnd('Timer1');