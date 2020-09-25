const { retornaArreglo } = require("../../base/07-deses-arr");

describe("Test in destructurin file", () => {
  test("should be retun a string an number", () => {
    const [ letters, numbers ] = retornaArreglo();

    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');
    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
  });
});
