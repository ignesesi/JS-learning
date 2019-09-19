
count = 0;
foo.broi = 0;
function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    this.count++;
    foo.broi++;
}

var i;
for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// how many times was `foo` called?
console.log( foo.count ); 
console.log( count ); 
console.log( foo.broi ); 


function bar(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    this.count++;
}

bar.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        bar.call(bar, i );
    }
}
console.log( bar.count ); 
