const sum = require('./soma')
describe("Testes de soma", () => {
  test("O retorno de sum 4,5 é 9", () => {
    expect(sum(4, 5)).toBe(9);
  })
  test("O retorno de sum 0,0 é 0", () => {
    expect(sum(0, 0)).toBe(0);
  })
  test("Erro quando passa string", () => {
    expect(sum(4, '5')).toBe(9)
  })
  test("Qual é o erro", () => {
    expect(() => { sum() }).toThrowError(new Error("parameters must be numbers"));
  })

})
