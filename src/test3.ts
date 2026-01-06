console.log("test3");

const foo = <T>(arg: T): T => {
  return arg;
};

foo<string>("test3");
