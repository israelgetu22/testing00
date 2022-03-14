const { returnTwo, greeting, add } = require("./functions");

test(" test return 2", () => {
  // expect(returnTwo()).toEqual(2);
  expect(returnTwo()).toBe(2);
});

test("test greeting", () => {
  expect(greeting("James")).toMatch(/Hello/);
  //expect(greeting("James")).toBe("Hello, James");
});

test("test add", () => {
  //expect(add(4, 3)).toEqual(7) && expect(add(10, 6).toEqual(16));
  expect(add(4, 3)).toBe(7) && expect(add(10, 6).toBe(16));
});
