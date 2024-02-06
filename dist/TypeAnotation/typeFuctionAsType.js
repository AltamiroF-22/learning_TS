"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapString = void 0;
const mapString = (array, callBackFn) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callBackFn(item));
    }
    return newArray;
};
exports.mapString = mapString;
const abc = ["a", "b", "c"];
const abcMapped = (0, exports.mapString)(abc, (item) => {
    return item.toUpperCase();
});
console.log(abcMapped);
