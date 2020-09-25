import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Test in 05-funciones.js file", () => {
  test("should be return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("should be return an object when the parameter name is fill", () => {
    const userTest = getUsuarioActivo('Andres');

    expect(userTest).not.toBeNull();
  });
});
