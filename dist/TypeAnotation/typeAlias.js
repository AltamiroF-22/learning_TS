"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFavoriteColor = void 0;
const people = {
    name: "Altamiro",
    lastName: "Júnior",
    age: 21,
    income: 999999999, // i'm jobless :(
};
const setFavoriteColor = (people, color) => {
    return Object.assign(Object.assign({}, people), { favoriteColor: color });
};
exports.setFavoriteColor = setFavoriteColor;
console.log((0, exports.setFavoriteColor)(people, "magenta"));
console.log(people);
