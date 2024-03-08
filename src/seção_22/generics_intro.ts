type FilterCallback<U> = (value: U, index?: unknown, array?: U[]) => boolean;

export const myFilter = <T>(
  array: T[],
  callbackFunc: FilterCallback<T>
): T[] => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFunc(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrayOriginalFilter = array.filter((value) => value > 5);

const myFilterConst = myFilter(array, (value) => value > 5);

console.log(myFilterConst);
