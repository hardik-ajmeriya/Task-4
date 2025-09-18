let users = [
  { id: 1, name: "Neha", role: "Developer" },
  { id: 2, name: "Aditya", role: "Designer" },
];

const getUsers = (req, res) => res.json(users);

const getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

const createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteUser = (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted successfully" });
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
