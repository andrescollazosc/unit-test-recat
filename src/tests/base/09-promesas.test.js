import { getHeroeByIdAsync } from "../../base/09-promesas";
import heros from "../../data/heros";

describe("Test with promises", () => {
  test("should returning one hero async ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heros[0]);
      done();
    });
  });

  test("should get one error when hero not exits", (done) => {
    const id = 10;
    const errorMessage = "No se pudo encontrar el héroe";

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(errorMessage);
      done();
    });
  });
});
