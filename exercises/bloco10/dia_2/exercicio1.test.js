const { test, expect } = require("@jest/globals")
const uppercase = require("./exercicio1")

test("verifica callback", done => {
  uppercase('test', (str) => {
    expect(str).toBe("TEST");
    done()
  })
})