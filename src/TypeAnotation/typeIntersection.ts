type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };
type Person = HaveName & HaveLastName & HaveAge;

const person: Person = {
  name: "Altamiro",
  lastName: "Júnior",
  age: 21,
};

console.log(person);

export { person, Person };
