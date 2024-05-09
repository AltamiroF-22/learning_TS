export class InvalidInputError extends Error {
  constructor(message?: string) {
    super();
    this.message = message || "Invalid Input";
  }
}

type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];

export class Robot {
  private _bearing: Direction = "north";
  private _coordinates: Coordinates = [0, 0];

  get bearing(): Direction {
    return this._bearing;
  }

  get coordinates(): Coordinates {
    return this._coordinates;
  }

  place({ x, y, direction }: { x: number; y: number; direction: Direction }) {
    if (!["north", "east", "south", "west"].includes(direction)) {
      throw new InvalidInputError();
    }
    this._bearing = direction;
    this._coordinates = [x, y];
  }

  evaluate(instructions: string) {

    const direction: Direction[] = ["north", "east", "south", "west"];
    let index = direction.indexOf(this._bearing);
    let coordinatesX = this._coordinates[0];
    let coordinatesY = this._coordinates[1];

    for (let i = 0; i < instructions.length; i++) {
      let atualInstruction = instructions[i];

      if (atualInstruction === "R") {
        index = (index + 1) % direction.length;
      }

      if (atualInstruction === "L") {
        index = (index - 1 + direction.length) % direction.length;
      }

      if (atualInstruction === "A") {
        switch (this._bearing) {
          case "north":
            coordinatesY++;
            break;
          case "east":
            coordinatesX++;
            break;
          case "south":
            coordinatesY--;
            break;
          case "west":
            coordinatesX--;
        }

        this._coordinates = [coordinatesX, coordinatesY];
      }

      this._bearing = direction[index];
    }
  }
}

const robot = new Robot();
robot.place({ x: 7, y: 3, direction: "north" });
robot.evaluate("RAALALLRUOIYGOYFOLRLRRLRLRLRLRLRLRAAAAAAAAAAAAAAAAAAAAAAAAAAA");
console.log(robot.coordinates, robot.bearing);

// Instructions
// Write a robot simulator.

// A robot factory's test facility needs a program to verify robot movements.

// The robots have three possible movements:

// turn right
// turn left
// advance
// Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of {x,y} coordinates, e.g., {3,8}, with coordinates increasing to the north and east.

// The robot then receives a number of instructions, at which point the testing facility verifies the robot's new position, and in which direction it is pointing.

// The letter-string "RAALAL" means:
// Turn right
// Advance twice
// Turn left
// Advance once
// Turn left yet again
// Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 4} facing west.
