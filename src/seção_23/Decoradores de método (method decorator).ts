function decorator(
  classProp: any,
  methodName: string,
  descriptor: PropertyDescriptor
): any {
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class APerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value: string) {
    const words = value.split(/\S+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(" ");
  }
}

const person = new APerson("altamiro", "junior", 22);
const method = person.method("the book is on the table");
console.log(method);
