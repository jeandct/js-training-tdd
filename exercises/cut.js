"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (string) => {
  return string.substring(2);
};

const cutLast = (string) => {
  return string.substring(0, string.length - 2);
  //
};

const cutFirstLast = (string) => {
  return string.substring(2, string.length - 2);
};

//* Begin of tests
const assert = require("assert");

// assert.fail("You must write your own tests");
assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst("test"), "st");
assert.strictEqual(cutFirst("ceci est un test"), "ci est un test");
assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast("test"), "te");
assert.strictEqual(cutLast("ceci est un test"), "ceci est un te");
assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast("test"), "");
assert.strictEqual(cutFirstLast("ceci est un test"), "ci est un te");
// End of tests */
