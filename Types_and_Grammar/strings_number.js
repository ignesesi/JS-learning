

(function(){
    console.warn("###############")
    var a = 42;
    var b = String( a );

    var c = "3.14";
    var d = Number( c );

    cl(b); // "42"
    cl(d); // 3.14
})();


(function(){
    console.warn("###############")
    var a = 42;
    var b = a.toString();

    var c = "3.14";
    var d = +c;

    cl(b) //42
    cl(d) //3.14
})();

console.warn("###############");
var c = "3.14";
var d = 5+ +c;

cl(c)
cl(d)

var x = 1 + - + + + - + 1;
cl(x)