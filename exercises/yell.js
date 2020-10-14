"use strict";

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

const yell = (string) => {
  return string.toUpperCase();
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof yell, "function");
assert.strict(yell("t"), "T");
assert.strict(yell("test"), "TEST");
assert.strict(yell("ceci est un test"), "CECI EST UN TEST");
// End of tests */
