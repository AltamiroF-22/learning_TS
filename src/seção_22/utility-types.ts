// Record
const objct: Record<string, string | number> = {
  name: "altamiro",
  lastname: "junior",
  age: 22,
};

type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// required
type PersonRequired = Required<PersonProtocol>;

// partial
type PersonPartial = Partial<PersonRequired>;

// readonly
type PersonReadonly = Readonly<PersonRequired>;

//Pick
type PersonPick = Pick<PersonProtocol, "name" | "lastname">;

const objct2: PersonRequired = {
  name: "altamiro",
  lastname: "junior",
  age: 22,
};

// extract and exclude
type ABC = "A" | "B " | "C";
type CDE = "C" | "D " | "E";

//type TypeExclude = "A" | "B "
type TypeExclude = Exclude<ABC, CDE>;
//type TypeExtract = "C"
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "weiuydpoqwhfdiqffwef435",
  name: "Altamiro",
  age: 22,
};

const mapAccount = (accountMongo: AccountMongo): AccountApi => {
  const { _id, ...accountData } = accountMongo;
  return { id: _id, ...accountData };
};

const accountApi = mapAccount(accountMongo);
console.table(accountApi);

//modeule mode
export default 1;
