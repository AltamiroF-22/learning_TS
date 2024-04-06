interface Constructor {
  new (...args: any[]): any;
}

// decorator
function invertNameAndColor(params: string, params2: string) {
  return function (target: Constructor) {
    console.log("decorator", target);
    return class extends target {
      color: string;
      name: string;
      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[1]);
      }

      private invert(value: string): string {
        return `${value.split("").reverse().join("")} ${params} ${params2}`;
      }
    };
  };
}

//2° decorator
function anotherDecorator(target: Constructor) {
  console.log("2 decorator");
}

@anotherDecorator
@invertNameAndColor("value1", "value2")
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("class");
  }
}

const animal = new Animal("sike", "ciano");
console.log(animal);
