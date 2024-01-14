// string | number | boolean

//this is only one exemple
export const add = (
  a: number | string,
  b: number | string
): number | string => {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a} ${b}`;
};
console.log(add(12, 90));
console.log(add("Atamiro ", "Júnior"));
console.log(add("Atamiro ", 29));
