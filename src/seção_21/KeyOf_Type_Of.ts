type ColorsObj = typeof colorsObj;
type ColorsObjKeys = keyof ColorsObj;

const colorsObj = {
  vermelho: "red",
  azul: "blue",
  amarelo: "yellow",
  verde: "green",
  roxo: "purple",
  rosa: "pink",
  laranja: "orange",
  marrom: "brown",
  cinza: "gray",
  ciano: "cyan",
  preto: "black",
  branco: "white",
  dourado: "gold",
  prateado: "silver",
  turquesa: "turquoise",
  indigo: "indigo",
  magenta: "magenta",
  coral: "coral",
  lima: "lime",
};

const translateColors = (color: ColorsObjKeys, colors: ColorsObj) => {
  return colors[color];
};
console.log(translateColors("rosa", colorsObj)); // output: pink
