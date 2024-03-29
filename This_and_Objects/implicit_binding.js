
//implicit binding
function f() {
    console.log( this.a );
}

var o = {
    a: 2,
    f: f
};

o.f(); // 2

//Only the top/last level of an object property reference chain matters to the call-site. For instance:
function foo() {
    console.log( this.a );
}

var obj2 = {
    a: 42,
    foo: foo
};

var obj1 = {
    a: 2,
    obj2: obj2
};
