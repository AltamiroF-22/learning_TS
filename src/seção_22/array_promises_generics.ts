type MyType = number;

const array: Array<number> = [1, 3, 4];

async function promiseFunc() {
  return 1;
}

function myPromise(): Promise<MyType | number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

promiseFunc().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
