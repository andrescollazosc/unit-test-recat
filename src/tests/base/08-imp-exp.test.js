import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heros from "../../data/heros";

describe("Test in 08-imp file", () => {
  test("should be retunr one hero by id ", () => {
    const id = 1;
    const hero = getHeroeById(id);

    const heroData = heros.find(h => h.id === id);
    console.log(hero);
    console.log(heroData);

    // expect(hero).toEqual(heroData);
  });

  test("should be return undefine when hero no exits", () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test('should be return all DC Items', () => {
      const owner = 'DC';
      const herosDC = getHeroesByOwner(owner);

      const herosDCData = heros.filter(heros => heros.owner === owner);

      expect(herosDCData).toEqual(herosDCData);
  });

  test('should be return two Marvel Items', () => {
    const owner = 'Marvel';
    const herosDC = getHeroesByOwner(owner).length;

    const quantityItemsMarvel = 2;

    expect(quantityItemsMarvel).toBe(herosDC);
});

});
