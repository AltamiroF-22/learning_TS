enum Colors {
  RED,             // 0
  GREEN,           // 1
  PURPLE,          // 2
  YELLOEGREEN,     // 3
}
enum Colors2 {
  RED = 1,         // 1
  GREEN,           // 2
  PURPLE,          // 3
  YELLOEGREEN,     // 4
}

enum Colors3 {
  RED = 10,             // 10
  GREEN = 200,          // 200
  PURPLE = 3000,        // 3000
  YELLOEGREEN = 40000,  // 40000
}

//////////////////////////////////////////////
console.log(Colors.PURPLE);
console.log(Colors2.PURPLE);
console.log(Colors3.PURPLE);
console.log('---------------');

//////////////////////////////////////////////
console.log(Colors[2]);
console.log(Colors2[2]);
console.log(Colors3[200]);
console.log('---------------');

//////////////////////////////////////////////
const pickAColor = (color: Colors): void => {
  console.log(Colors[color]);
};

pickAColor(Colors.GREEN);
pickAColor(3);
