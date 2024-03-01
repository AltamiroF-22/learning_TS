interface TypePerson {
  name: string;
  lastname: string;
  age: number;
}
interface TypePersonFunc {
  fullName(): string;
  isAdult(): boolean;
}

type TypeAllTypes = TypePerson & TypePersonFunc;

interface TypeAllTypes2 extends TypePersonFunc, TypePerson {}

export class Person implements TypeAllTypes2 {
  constructor(
    public name: string,
    public lastname: string,
    public age: number
  ) {}

  fullName(): string {
    return this.name + " " + this.lastname;
  }

  isAdult(): boolean {
    if (this.age < 18) return false;
    return true;
  }
}

const personObj: TypeAllTypes = {
  name: "ALTAMIRO",
  lastname: "JÚNIOR",
  age: 22,
  
  fullName(): string {
    return this.name + " " + this.lastname;
  },

  isAdult(): boolean {
    if (this.age < 18) return false;
    return true;
  }
};

console.table(personObj)

const person = new Person("Altamro", "Júnior", 22);
console.log(person.fullName());
console.log(person.isAdult());
