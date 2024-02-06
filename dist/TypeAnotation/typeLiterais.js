"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickAColor = exports.person = void 0;
exports.person = {
    name: "Atamiro",
    lastName: "junior",
    age: 21,
};
// person.name = 'camilla'
const pickAColor = (color) => {
    return color;
};
exports.pickAColor = pickAColor;
console.log((0, exports.pickAColor)('green'));
