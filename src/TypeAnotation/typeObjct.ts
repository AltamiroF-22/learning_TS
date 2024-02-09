const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: "value a",
  keyB: "value B",
};

// objectA.keyA = "new key A";
objectA.keyB = "new key B";
objectA.keyC = "new key C";
objectA.keyD = "new key D";

console.log(objectA);
