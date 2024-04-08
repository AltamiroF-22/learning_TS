function decorator(classPrototype: any, name: string | symbol): any {
  let propValue: any;
  return {
    get: () => propValue,
    set: (value: any) => {
      if (typeof value !== "string") return (propValue = value);
      propValue = value.split("").reverse().join("");
    },
  };
}

export class APerson {
  @decorator
  name: string;
  @decorator
  lastname: string;
  @decorator
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

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
