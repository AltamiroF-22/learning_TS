const createError = (): never => {
  throw new Error("any error");
};

createError();
