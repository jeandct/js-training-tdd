"use strict";

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

const jadenCase = (string) => {
  let stringArray = string.split(" ");
  let output = stringArray.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return output.join(" ");
};

jadenCase("ceci est un test");

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof jadenCase, "function");
assert.strictEqual(jadenCase("t"), "T");
assert.strictEqual(jadenCase("test"), "Test");
assert.strictEqual(jadenCase("TEST"), "Test");
assert.strictEqual(jadenCase("ceci est un test"), "Ceci Est Un Test");
assert.strictEqual(jadenCase("CECI EST UN TEST"), "Ceci Est Un Test");
// End of tests */
