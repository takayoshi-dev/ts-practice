// Partial<T>のサンプル
type User = {
  surname: string;
  middleName?: string;
  givenName: string;
  age: number;
  address?: string;
  nationality: string;
  createdAt: string;
  updatedAt: string;
};

type FindUsersArgs = Partial<User>;
function findUsers({
  surname,
  middleName,
  givenName,
  age,
  address,
  nationality,
}: FindUsersArgs = {}) {
  if (typeof surname === "string") {
    console.log(surname);
  }
  if (typeof middleName === "string") {
    console.log(middleName);
  }
  if (typeof givenName === "string") {
    console.log(givenName);
  }
  if (typeof age === "number") {
    console.log(age);
  }
  if (typeof address === "string") {
    console.log(address);
  }
  if (typeof nationality === "string") {
    console.log(nationality);
  }
}

function display<T>(value: T): void {
  switch (typeof value) {
    case "string":
    case "number":
      console.log(value);
      break;
    default:
      break;
  }
}

findUsers();
findUsers({ age: 22 });
