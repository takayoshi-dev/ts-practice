const modes = ["easy", "normal", "hard"] as const;
type Mode = (typeof modes)[number];

const selectedMode: Mode = "normal";
console.log(selectedMode);
