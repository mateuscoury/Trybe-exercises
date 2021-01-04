const myremovew = require("./myremovew")

test("array esperado", () => {
  expect(myremovew([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})
test("array esperado 1", () => {
  expect(myremovew([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})