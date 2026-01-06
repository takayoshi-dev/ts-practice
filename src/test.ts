const reversedArray = (arr: string[]): string[] => {
  const resultArr: string[] = [];

  arr.forEach((value, index) => {
    resultArr[arr.length - (index + 1)] = value;
  });

  return resultArr;
};

console.log(reversedArray(["a", "b", "c"]));
