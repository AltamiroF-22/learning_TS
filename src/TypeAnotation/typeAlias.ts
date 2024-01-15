type Age = number;
type Person = {
  name: string;
  lastName: string;
  age: Age;
  income: number;
  favoriteColor?: string;
};

type ColorRGB = "red" | "green" | "blue";
type ColorCMYK = "cyan" | "magenta" | "yellow" | "black";
type FavoriteColor = ColorRGB | ColorCMYK;

const people: Person = {
  name: "Altamiro",
  lastName: "Júnior",
  age: 21,
  income: 999_999_999, // i'm jobless :(
};

export const setFavoriteColor = (
  people: Person,
  color: FavoriteColor
): Person => {
  return {
    ...people,
    favoriteColor: color,
  };
};

console.log(setFavoriteColor(people, "magenta"));
console.log(people);
