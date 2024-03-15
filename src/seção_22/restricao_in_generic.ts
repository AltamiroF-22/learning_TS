type GetFuncKey = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetFuncKey = (object, key) => object[key];

export const person = {
  name: "junior",
  lastname: "lslslsl",
  address: { street: "the book is on the table", number: 90 },
};

const lastname = getKey(person, "lastname");
const address = getKey(person, "address");

console.log(lastname);
console.log(address.street);
