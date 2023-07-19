import assert from "assert";
import greet from "../functions/greet.js";
describe("The greet function ", function () {
  it("should greet Andre correctly", function () {
    assert.equal("Hello, Andre", greet("Andre"));
  });
  it("should greet Karen correctly", function () {
    assert.equal("Hello, Karen", greet("Karen"));
  });
});
