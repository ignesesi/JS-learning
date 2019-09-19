
// import the entire "foo" and "bar" modules
/*module foo from "./foo.js";
module bar from "./bar.js";*/
import * as bar from "./bar.js";
import * as foo from "./foo.js";

console.log(
    bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO