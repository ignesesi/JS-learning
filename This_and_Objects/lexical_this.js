
console.warn("Example 1");
function foo() {
    // return an arrow function
    /*return (a) => {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    };
    return function (a) {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    };*/
    
    var self = this;
    return function (a) {
        // `this` here is lexically adopted from `foo()`
        console.log( self.a );
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};

var bar = foo.call( obj1 );
bar.call( obj2 ); // =>, self 2
                // function 3!





console.warn("Example 2");
function sto() {
    /*
    setTimeout(() => {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    },100);
    */
    /*
    var self = this; // lexical capture of `this`
    setTimeout(function () {
        // `this` here is lexically adopted from `foo()`
        console.log( self.a );
    },100);
    */
    setTimeout(function () {
        // global a -> undefined
        console.log( this.a );
    },100);
}

var obj = {
    a: 2
};

sto.call( obj ); // 2

