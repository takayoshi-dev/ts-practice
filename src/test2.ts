const plane = {
  planeId: 1,
  planeType: "player",
  x: 10,
  y: 20,
};

// interface
interface Intf {
  planeId: number;
  planeType: string;
  x: number;
  y: number;
}

interface Intf2 extends Intf {
  test: string;
}

// type
type Type1 = {
  test: string;
};

type Type2 = Type1 & {
  test2: string;
};

// 呼び出し
const createPlane = (planeInfo: Intf) => {
  console.log(planeInfo);
};

createPlane(plane);
