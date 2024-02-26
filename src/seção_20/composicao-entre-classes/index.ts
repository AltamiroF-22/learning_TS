export class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }
  turnOff(): void {
    this.motor.turnOff();
  }
  speedUp(): void {
    this.motor.speedUp();
  }
  slowDown(): void {
    this.motor.slowDown();
  }
}

export class Motor {
  turnOn(): void {
    console.log(`motor is on`);
  }
  turnOff(): void {
    console.log(`motor is off`);
  }
  speedUp(): void {
    console.log(`increasing speed`);
  }

  slowDown(): void {
    console.log(`slowing down`);
  }
}

const car = new Car();

car.turnOn();
car.speedUp();
car.slowDown();
car.turnOff();
