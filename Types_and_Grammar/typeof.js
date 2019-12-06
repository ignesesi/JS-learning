
function foo() {
    console.log("Tova nesto")
}

var foo;

function doSmt(foo) {
    var help = foo || function () {
        console.log("Drugo nesto")
    }
    help()
}
doSmt(foo)