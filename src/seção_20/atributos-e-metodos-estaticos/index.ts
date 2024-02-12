export class Person {
  public static standardAge = 0;
  public static standardCpf = "000.000.000-00";

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string
  ) {}

  public static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, this.standardAge, this.standardCpf);
  }
}

const person = new Person("Altamiro", "Júnior", 21, "123.456.789-00");
const person2 = Person.createPerson("Camille", "Caterinque");

console.log(person);
console.log(person2);
