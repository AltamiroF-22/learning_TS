export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;

    return this;
  }

  sub(n: number): this {
    this.number -= n;

    return this;
  }
  times(n: number): this {
    this.number *= n;

    return this;
  }
  divi(n: number): this {
    this.number /= n;

    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;

    return this;
  }
}

const calculator = new SubCalculator(10);

calculator.add(10).times(10).divi(5).sub(38).pow(3);

console.log(calculator);

//builder -GoF

export class RequestBuilder {
  private method: "POST" | "GET" | null = null;
  private url: string | null = null;

  setMethod(method: "POST" | "GET"): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`sending data by ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl("https://juniorrx22.netlify.app/").setMethod("POST").send();
