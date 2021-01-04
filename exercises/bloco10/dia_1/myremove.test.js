const myrem = require("./myremove")

describe("Testes", () => {
  test("retorna o array 1", () => {
    expect(myrem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  test("retorna o array 2", () => {
    expect(myrem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  test("retorna o array 3", () => {
    expect(myrem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})