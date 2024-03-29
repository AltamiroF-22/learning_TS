export const joinObjtcs = <T, U>(obj1: T, obj2: U): T & U => {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
};

const obj1 = { name: "flavi" };
const obj2 = { car: "Hummer Ev" };

const joiin = joinObjtcs(obj1, obj2);
console.log(joiin);
