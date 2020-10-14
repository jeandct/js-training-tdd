"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = (string) => {
  return "*" + string.toLowerCase() + "*";
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof whisper, "function");
assert.strictEqual(whisper("test"), "*test*");
assert.strictEqual(whisper("TEST"), "*test*");
// End of tests */
