export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log(`I can't write without a tool :/`);
    } else {
      this.tool.write();
    }
  }
}

export abstract class Tool {
  constructor(private _name: string, private _author: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }

  get author(): string {
    return this._author;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.author} is writing with a pen: ${this.name}`);
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.author} is writing with a typewriter: ${this.name}`);
  }
}

const writer = new Writer("Junior");
const pen = new Pen("Bic", writer.name);
const typewriter = new Typewriter("M", writer.name);

writer.tool = pen;
writer.tool = typewriter

writer.write();
