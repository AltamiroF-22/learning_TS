interface Carro {
  marca: string;
  ano: string;
}

interface Car {
  brand: Carro["marca"];
  year: Carro["ano"];
  model: string;
}

const car1: Car = {
  brand: "GMC",
  year: "2024",
  model: "Hummer Ev",
};


console.table(car1)