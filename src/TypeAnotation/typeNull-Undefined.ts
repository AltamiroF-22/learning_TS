export function creatPerson(
  firstName: string,
  lastName: string,
  age?: number
): {
  firstName: string;
  lastName: string;
  age?: number;
} {
  return {
    firstName,
    lastName,
    age,
  };
}

export const squareOf = (x: any) => {
  return typeof x === "number" ? x * x : null;
};

const squareOfTwoNumber = squareOf(2);

squareOfTwoNumber === null
  ? console.log("not allowed")
  : console.log("allowed");
