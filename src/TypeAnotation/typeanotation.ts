//basic
let nome: string = "luiz";
let idade: number = 34;
let adulto: boolean = true;
let simbolo: symbol = Symbol("any");

//Arrays
let arraysOfNumbers: Array<number> = [12, 2, 4, 36];
let arraysOfStrings: Array<string> = ["uohuoi", "12387913"];

let orArraysOfNumbers: number[] = [12, 2, 4, 36];
let orArraysOfStrings: string[] = ["uohuoi", "12387913"];

//objects
let person: { name: string; age: number; adult?: boolean } = {
  name: "Altamiro",
  age: 21,
  adult: true,
};

//fuctions
const sum = (num1: number, num2: number, num3?: number): number => {
  let chekNum3 = num3 === undefined || null ? 0 : num3;
  return num1 + num2 + chekNum3;
};
