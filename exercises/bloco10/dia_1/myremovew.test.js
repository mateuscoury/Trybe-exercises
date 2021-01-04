const myremovew = require("./myremovew")

test("array esperado", () => {
  expect(myremovew([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})