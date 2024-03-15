export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [K: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.counter--;

    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  showElements(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }

  removeAll(stack: Stack<T>): void {
    while (!this.isEmpty()) {
      console.log(stack.pop());
    }
  }
}

const stack = new Stack<number | string>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push("altamiro");
stack.showElements();
stack.removeAll(stack);

