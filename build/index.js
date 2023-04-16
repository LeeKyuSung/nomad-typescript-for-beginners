import { init, exit } from "./myPackage";
init({ url: "http://localhost:3000", debug: true });
exit(1);
// head([1, 2, 3]);
// hasIn({ a: { b: 2 } }, "a.b");
// isBoolean(false);
// toString(null);
// split("a-b-c", "-");
// hasPath({ a: { b: 2 } }, "a.b");
// filter([1, 2, 3], Boolean);
// every([true, 1, null, "yes"], Boolean);
// map(["6", "8", "10"], (n) => parseInt(n, 10));
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
