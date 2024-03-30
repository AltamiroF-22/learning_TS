export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

console.log(isNumber(1));
console.log(isNumber("1"));

export const sum = <T>(...args: T[]): number => {
  const returnn = args.reduce((summ, value) => {
    if (isNumber(summ) && isNumber(value)) {
      return summ + value;
    }
    return summ;
  }, 0);

  return returnn;
};

console.log(sum(1, 2, 4, 45, 5, 46, 46, 46, 46, 4, 4));
console.log(sum("12", "23", "1"));
