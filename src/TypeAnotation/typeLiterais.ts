export const person: { name: string; lastName: string; age?: number } = {
  name: "Atamiro" as const,
  lastName: "junior",
  age: 21,
};

// person.name = 'camilla'

export const pickAColor = (color: "red" | "green" | "blue"): string => {
  return color;
};

console.log(pickAColor('green'));
