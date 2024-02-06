"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["GREEN"] = 1] = "GREEN";
    Colors[Colors["PURPLE"] = 2] = "PURPLE";
    Colors[Colors["YELLOEGREEN"] = 3] = "YELLOEGREEN";
})(Colors || (Colors = {}));
var Colors2;
(function (Colors2) {
    Colors2[Colors2["RED"] = 1] = "RED";
    Colors2[Colors2["GREEN"] = 2] = "GREEN";
    Colors2[Colors2["PURPLE"] = 3] = "PURPLE";
    Colors2[Colors2["YELLOEGREEN"] = 4] = "YELLOEGREEN";
})(Colors2 || (Colors2 = {}));
var Colors3;
(function (Colors3) {
    Colors3[Colors3["RED"] = 10] = "RED";
    Colors3[Colors3["GREEN"] = 200] = "GREEN";
    Colors3[Colors3["PURPLE"] = 3000] = "PURPLE";
    Colors3[Colors3["YELLOEGREEN"] = 40000] = "YELLOEGREEN";
})(Colors3 || (Colors3 = {}));
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
const pickAColor = (color) => {
    console.log(Colors[color]);
};
pickAColor(Colors.GREEN);
pickAColor(3);
