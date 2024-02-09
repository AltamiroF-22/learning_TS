"use strict";
//basic
let nome = "luiz";
let idade = 34;
let adulto = true;
let simbolo = Symbol("any");
//Arrays
let arraysOfNumbers = [12, 2, 4, 36];
let arraysOfStrings = ["uohuoi", "12387913"];
let orArraysOfNumbers = [12, 2, 4, 36];
let orArraysOfStrings = ["uohuoi", "12387913"];
//objects
let person = {
    name: "Altamiro",
    age: 21,
    adult: true,
};
//fuctions
const sum = (num1, num2, num3) => {
    let chekNum3 = num3 === undefined || null ? 0 : num3;
    return num1 + num2 + chekNum3;
};
//////////////////////////////////////////////////////////////////
console.log(sum(20, 90, -10));
console.log(sum(10, 90));
