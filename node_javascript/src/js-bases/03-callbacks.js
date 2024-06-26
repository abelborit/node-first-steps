const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

function getUserByIdCallback(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`User not found with id ${id}`, null);
  }

  return callback(null, user);
}

module.exports = {
  getUserByIdCallback,
};
