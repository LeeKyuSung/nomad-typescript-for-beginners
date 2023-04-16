import { init, exit } from "./myPackage";

init({ url: "http://localhost:3000", debug: true });
exit(1);

import head from "./lodash/head";
import hasIn from "./lodash/hasIn";
import isBoolean from "./lodash/isBoolean";
import toString from "./lodash/toString";
import split from "./lodash/split";
import hasPath from "./lodash/hasPath";
import filter from "./lodash/filter";
import every from "./lodash/every";
import map from "./lodash/map";

console.log(head([1, 2, 3]));
console.log(hasIn({ a: 1 }, "a"));
console.log(isBoolean(true));
console.log(toString(1));
console.log(split("a-b-c", "-"));
console.log(hasPath({ a: { b: 1 } }, "a.b"));
console.log(filter([1, 2, 3], (x: number) => x > 1));
console.log(every([true, 1, null, "yes"], Boolean));
console.log(every([true, 1], Boolean));
console.log(map([1, 2, 3], (x: number) => x * 2));

// import {
//   head,
//   hasIn,
//   isBoolean,
//   toString,
//   split,
//   hasPath,
//   filter,
//   every,
//   map,
// } from "lodash";
