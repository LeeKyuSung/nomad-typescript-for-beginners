declare module "lodash" {
  function head(array: any[]): any | undefined;
  function hasIn(object: object, path: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(string: string, separator: string): string[];
  function split(string: string, separator: string, limit: number): string[];
  function hasPath(object: object, path: string[] | string): boolean;
  function filter<T>(array: T[], predicate: (value: T) => boolean): T[];
  function every<T>(array: T[], predicate: (value: T) => boolean): boolean;
  function map<T, U>(array: T[], predicate: (value: T) => U): U[];
}
