"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
const noReturn = (...args) => {
    console.log(args.join("-"));
};
const person = {
    name: "Altamiro",
    lastName: "Júnior",
    showName() {
        console.log(this.name + " " + this.lastName);
    },
};
exports.person = person;
noReturn("altamiro", "ribeiro", "da", "rocha", "júnior");
person.showName();
