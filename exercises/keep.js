"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

const keepFirst = (string) => {
  return string.substring(0, 2);
};

const keepLast = (string) => {
  return string.substring(string.length - 2);
};

const keepFirstLast = (string) => {
  return string.substring(3);
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(keepFirst("t"), "t");
assert.strictEqual(keepFirst("test"), "te");
assert.strictEqual(keepFirst("ceci est un test"), "ce");
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(keepLast("t"), "t");
assert.strictEqual(keepLast("test"), "st");
assert.strictEqual(keepLast("ceci est un test"), "st");
assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirstLast("test"), "t");
assert.strictEqual(keepFirstLast("ceci est un test"), "i est un test");

// End of tests */
