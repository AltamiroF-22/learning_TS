"use strict";
// string | number | boolean
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
//this is only one exemple
const add = (a, b) => {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return `${a} ${b}`;
};
exports.add = add;
console.log((0, exports.add)(12, 90));
console.log((0, exports.add)("Atamiro ", "Júnior"));
console.log((0, exports.add)("Atamiro ", 29));
