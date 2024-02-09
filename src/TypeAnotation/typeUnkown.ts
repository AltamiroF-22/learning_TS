// let x: any;
// x = 20;
// x = "junior";
// x = "20";
// const y = 90;

// console.log(y + x);

let x2: unknown;
x2 = 20;
x2 = "junior";
x2 = 20;
const y2 = 90;

typeof x2 === "number"
  ? console.log(x2 + y2)
  : console.log("x2 is a string :/");
