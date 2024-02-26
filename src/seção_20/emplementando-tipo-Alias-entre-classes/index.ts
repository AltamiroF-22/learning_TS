type TypePerson = {
  name: string;
  lastname: string;
  age: number;
};

type TypePersonFunc = {
  fullName(): string;
  isAdult(): boolean;
};

export class Person implements TypePerson, TypePersonFunc {
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

const person = new Person("Altamro", "Júnior", 22);
console.log(person.fullName());
console.log(person.isAdult())
