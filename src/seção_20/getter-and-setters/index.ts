export class Person {
  constructor(
    private readonly name: string,
    private readonly lastName: string,
    private readonly age: number,
    protected _cpf: string
  ) {}

  public set cpf(value: string) {
    this._cpf = value;
  }

  public get cpf(): string {
    return this._cpf.replace(/\D/g, ""); //remove all except numbers
  }

  public getFullName(): string {
    return this.name + " " + this.lastName;
  }
}

const person = new Person("Altamiro", "Júnior", 21, "123.456.789-00");

console.table(person.cpf);
person.cpf = "987.873.846-90";
console.table(person.cpf);
