// import only `hello()` from the "bar" module
import {hello} from "./bar.js";

var hungry = "hippo";

function awesome() {
    console.log(
        hello( hungry ).toUpperCase()
    );
}
awesome();
export {awesome};