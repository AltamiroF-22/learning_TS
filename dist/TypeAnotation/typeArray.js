"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapUpperCase = exports.concatenateString = exports.multiplyArgs = void 0;
// Type[]
const multiplyArgs = (...args) => {
    return args.reduce((ac, value) => ac * value, 1);
};
exports.multiplyArgs = multiplyArgs;
const result = (0, exports.multiplyArgs)(2, 4, 5);
// Array<Type>
const concatenateString = (...args) => {
    // return args.reduce((ac, value) => ac + value);
    return args.join("");
};
exports.concatenateString = concatenateString;
const concatenateRes = (0, exports.concatenateString)("A", "B", "C");
//
const mapUpperCase = (...args) => {
    return args.map((value) => value.toUpperCase());
};
exports.mapUpperCase = mapUpperCase;
const mapUpperCaseRes = (0, exports.mapUpperCase)("Altamiro", "ribeiro", "dA", "RoCHA", "júniOr");
//////////////////////////////////////////////////////////////////////
console.log(`${result}`);
console.log(`${concatenateRes}`);
console.log(`${mapUpperCaseRes.join(" ")}`);
console.log(`${mapUpperCaseRes.join(" ").toLocaleLowerCase()} :)`);
