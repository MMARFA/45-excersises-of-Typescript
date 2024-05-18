var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesTovisit = ["canada", "nigeria", "brazil", "india"];
console.log("original order:", countriesTovisit);
console.log("Alphabtical order:", __spreadArray([], countriesTovisit, true).sort());
console.log("still in original order:", countriesTovisit);
console.log("reverse order:", __spreadArray([], countriesTovisit, true).reverse());
console.log("still in original order:", countriesTovisit);
console.log("original array reversed:", countriesTovisit.reverse());
console.log("back to original order:", countriesTovisit.reverse());
console.log("sort the alphabetical order:", countriesTovisit.sort());
console.log("original array reversed:", countriesTovisit.reverse());
