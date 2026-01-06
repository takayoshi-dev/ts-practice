const reversedArray = (arr: string[], hasOption?: boolean): string[] => {
  const resultArr: string[] = [];

  arr.forEach((value, index) => {
    resultArr[arr.length - (index + 1)] = value;
  });

  if (hasOption) {
    resultArr.push("test");
  }

  return resultArr;
};

console.log(reversedArray(["a", "b", "c"], true));
