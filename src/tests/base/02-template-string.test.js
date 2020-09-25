import "@testing-library/jest-dom";

const { getSaludo } = require("../../base/02-template-string");

describe("Test 02-template-string.test file", () => {
  test("Should be return Hola Andres", () => {
    const firstName = "Andres";

    const result = getSaludo(firstName);
    const greeting = "Hola Andres";

    expect(greeting).toBe(result);
  });

  test("should be return Hola Fernando when the parameter name is empty", () => {
    const greeting = "Hola Fernando";
    const result = getSaludo();

    expect(greeting).toBe(result);
  });
});
