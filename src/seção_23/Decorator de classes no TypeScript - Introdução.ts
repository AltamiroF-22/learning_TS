// decorator
@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

//decorator
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.invert(args[0]);
      this.color = this.invert(args[1]);
    }

    private invert(value: string): string {
      return value.split("").reverse().join("");
    }
  };
}

const animal = new Animal("sike", "ciano");

console.log(animal);
