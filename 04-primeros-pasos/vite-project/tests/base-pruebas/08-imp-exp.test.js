const {
  getHeroeById,
  getHeroesByOwner,
} = require("../../src/base-pruebas/08-imp-exp");

describe("Pruebas en 08-import-expo", () => {
  test("getHeroesByid debe retornar un heroe por ID ", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroesByid debe retornar undefine si no existe id", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();
  });

  test("getHeroesOwer debe retornar los heroes DC en caso exista", () => {
    const ower = "DC";
    const heroe = getHeroesByOwner(ower);

    expect(heroe).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("getHeroesOwer debe retornar leng = 3 de los heroes DC", () => {
    const owerDC = "DC";
    const heroeDC = getHeroesByOwner(owerDC).length;
    expect(heroeDC).toBe(3);

    const owerMarvel = "Marvel";
    const heroeMarvel = getHeroesByOwner(owerMarvel).length;
    expect(heroeMarvel).toBe(2);
  });
});
