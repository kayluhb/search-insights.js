// use theses type checking helpers to avoid mistyping "undefind", I mean "undfined"
export const isUndefined = (value: any): value is undefined =>
  typeof value === "undefined";
export const isString = (value: any): value is string =>
  typeof value === "string";
export const isNumber = (value: any): value is number =>
  typeof value === "number";

/* eslint-disable @typescript-eslint/ban-types */
export const isFunction = (value: any): value is Function =>
  typeof value === "function";
/* eslint-enable */

export * from "./extractAdditionalParams";
export * from "./featureDetection";
