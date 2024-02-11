export class Person {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly cpf: string
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return this.name + " " + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    private readonly studentClass: string
  ) {
    super(name, lastName, age, cpf);
  }

  public getFullName(): string {
    return `Came from Student ${this.name} ${this.lastName}`;
  }

  public getClass(): string {
    return this.studentClass;
  }
}

export class Client extends Person {
  public getFullName(): string {
    return `Came from Client ${this.name} ${this.lastName}`;
  }
}

const person = new Person("altamiro", "júnior", 21, "123.456.789-00");
const student = new Student(
  "altamiro",
  "júnior",
  21,
  "123.456.789-00",
  "class: 09"
);
const client = new Client("altamiro", "júnior", 21, "123.456.789-00");

// console.log(person.getFullName());
// console.log(student.getFullName());
// console.log(client.getFullName());

console.log(student.getClass());
