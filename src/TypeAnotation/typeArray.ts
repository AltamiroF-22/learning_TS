// Type[]
export const multiplyArgs = (...args: number[]): number => {
  return args.reduce((ac, value) => ac * value, 1);
};

const result = multiplyArgs(2, 4, 5);

// Array<Type>
export const concatenateString = (...args: Array<string>): string => {
  // return args.reduce((ac, value) => ac + value);
  return args.join("");
};

const concatenateRes = concatenateString("A", "B", "C");

//
export const mapUpperCase = (...args: string[]): string[] => {
  return args.map((value) => value.toUpperCase());
};

const mapUpperCaseRes = mapUpperCase(
  "Altamiro",
  "ribeiro",
  "dA",
  "RoCHA",
  "júniOr"
);

//////////////////////////////////////////////////////////////////////
console.log(`${result}`);
console.log(`${concatenateRes}`);
console.log(`${mapUpperCaseRes.join(" ")}`);
console.log(`${mapUpperCaseRes.join(" ").toLocaleLowerCase()} :)`);
