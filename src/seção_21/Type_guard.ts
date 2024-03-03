export const add = (a: unknown, b: unknown): number | string => {
  return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
};

// console.log(add(37, 50));

interface Person {
  type: "person";
  name: string;
  age: number;
  lastname?: string;
}

interface Animal {
  type: "animal";
  color: string;
  race: string;
  age?: number;
}

type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: "person" = "person";
  constructor(
    public name: string,
    public age: number,
    public lastname?: string
  ) {}
}

export class Dog implements Animal {
  type: "animal" = "animal";
  constructor(public color: string, public race: string, public age?: number) {}
}

const showName = (obj: PersonOrAnimal): void => {
  // if ("name" in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);

  switch (obj.type) {
    case "person":
      console.log(`the name of this person is ${obj.name}`);
      return;

    case "animal":
      console.log(`the race of this animal is ${obj.race}`);
      return;
  }
};

const student = new Student("Altamiro", 22, "Junior");
const dog = new Dog("brown", "golden");

showName(student);
showName(dog);
