const { expect } = require("@jest/globals");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}
describe("quando um usuario é encontrado", () => {
  test("seila", async () => {
    expect.assertions(1)
    const data = await getUserName(4)
    expect(data).toEqual("Mark")
  })
})

describe("quando um usuario nao é encontrado", () => {
  it("nao encontrar", async () => {
    expect.assertions(1)
    try {
      await getUserName(6)
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    }
  })
})

