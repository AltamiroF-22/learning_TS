const noReturn = (...args: string[]): void => {
  console.log(args.join("-"));
};

const person = {
  name: "Altamiro",
  lastName: "Júnior",

  showName(): void {
    console.log(this.name + " " + this.lastName);
  },
};

noReturn("altamiro", "ribeiro", "da", "rocha", "júnior");
person.showName();

export { person };
