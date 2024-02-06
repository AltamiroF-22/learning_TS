"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareOf = exports.creatPerson = void 0;
function creatPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
    };
}
exports.creatPerson = creatPerson;
const squareOf = (x) => {
    return typeof x === "number" ? x * x : null;
};
exports.squareOf = squareOf;
const squareOfTwoNumber = (0, exports.squareOf)(2);
squareOfTwoNumber === null
    ? console.log("not allowed")
    : console.log("allowed");
