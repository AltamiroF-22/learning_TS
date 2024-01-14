interface Person {
  name: string;
  lastName: string;
  age: number;
}

export const people: Person[] = [
  { name: "Altamiro", lastName: "Júnior", age: 21 },
  { name: "Alice", lastName: "Johnson", age: 28 },
  { name: "Bob", lastName: "Smith", age: 5 },
  { name: "Charlie", lastName: "Williams", age: 42 },
  { name: "Diana", lastName: "Brown", age: 23 },
  { name: "Eva", lastName: "Davis", age: 31 },
  { name: "Frank", lastName: "Miller", age: 40 },
];
const res = people
  .map((value) => value.name.toLocaleUpperCase().slice(0, 3) + "...")
  .join(" - ");

let olderPerson = "";
let maxAge = 0;

for (let i = 0; i < people.length; i++) {
  if (people[i].age > maxAge) {
    olderPerson = people[i].name;
    maxAge = people[i].age;
  }
}

// console.log(olderPerson);
// console.log(res);

const num: Array<number> = [1, 2, 3, 4, 5];
const copia: Array<number> = [...num];

num.unshift(9);
// console.log(`${num.at(0)}, ${copia.at(0)}`);

///////////////////////////////////////////////////

const bits: Array<string> = ["1", "0"];
let result = "";

for (let i = 0; i < 300; i++) {
  let randomBit = Math.floor(Math.random() * 2);

  result += bits[randomBit];
}

// console.log(result);

////////////////////////////////////////////////////

const caracteresPadrao: Array<string> = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\',
  ':', ';', ',', '.', '<', '>', '/', '?'
];

const generatePass = (length: number): string => {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteresPadrao.length);
    password += caracteresPadrao[randomIndex];
  }

  return password;
};

const howManyPass = (
  passwords: number,
  passwordsLength: number
): Array<string> => {
  const allPasswords: Array<string> = [];
  for (let i = 0; i < passwords; i++) {
    allPasswords.push(generatePass(passwordsLength));
  }
  return allPasswords;
};

const allPasswords = howManyPass(10, 15);
allPasswords.forEach(value => console.log(value));
