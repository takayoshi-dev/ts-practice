const reversedArray = (arr: string[]): string[] => {
  const resultArr: string[] = [];
  let index: number = arr.length - 1;

  while (index >= 0) {
    const value: string | undefined = arr[index];
    if (typeof value == "string") {
      resultArr.push(value);
    }

    index--;
  }
  return resultArr;
};

console.log(reversedArray(["a", "b", "c"]));
