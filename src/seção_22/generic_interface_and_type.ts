interface PersonProps<T, U> {
  name: T;
  lastname: T;
  age: U;
}
// ||
interface PersonProps2<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

const student: PersonProps<string, number> = {
  name: "Altamiro",
  lastname: "Júnior",
  age: 22,
};

const student2: PersonProps2 = {
  name: "Altamiro2",
  lastname: "Júnior2",
  age: 22,
};

console.table(student);
console.table(student2);
