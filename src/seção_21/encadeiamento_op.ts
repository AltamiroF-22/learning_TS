type Documentt = {
  title: string;
  text: string;
  date?: Date;
};

const documentt: Documentt = {
  title: "O Titulo",
  text: "O text",
  // date: new Date(),
};

// console.log(documentt.date ? documentt.date.toDateString() : 'ops no date to show')
// ! null || undefined
console.log(documentt.date?.toDateString() ?? "ops no date to show");
