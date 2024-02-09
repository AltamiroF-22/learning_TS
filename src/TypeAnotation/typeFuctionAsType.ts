type MapStringCallback = (item: string) => string;

export const mapString = (
  array: string[],
  callBackFn: MapStringCallback
): string[] => {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callBackFn(item));
  }

  return newArray;
};

const abc = ["a", "b", "c"];
const abcMapped = mapString(abc, (item) => {
  return item.toUpperCase();
});

console.log(abcMapped);
