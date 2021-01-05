
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
  test("seila", () => {
    expect.assertions(1)
    return getUserName(4).then(data => {
      expect(data).toEqual("Mark")
    })
  })
})
describe("quando um usuario nao é encontrado", () => {
  it("nao encontrar", () => {
    expect.assertions(1)
    return getUserName(6).catch(data => {
      expect(data).toEqual({ error: 'User with 6 not found.' })
    })
  })
})
