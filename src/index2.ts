// import { init, exit } from "./myPackage";

// init({ url: "http://localhost:3000", debug: true });
// exit(1);

import {
  head,
  hasIn,
  isBoolean,
  toString,
  split,
  hasPath,
  filter,
  every,
  map,
} from "lodash";

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
