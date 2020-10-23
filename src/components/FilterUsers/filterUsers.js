const filterContacts = (
  users,
  filterName,
  filterLastName,
  filterAge,
  gender,
) => {
  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(filterName.toLowerCase()) &&
      user.lastname.toLowerCase().includes(filterLastName.toLowerCase()) &&
      user.age.toString().includes(filterAge),
  );

  return filteredUsers.filter(user => (gender ? user.sex === gender : user));
};

export default filterContacts;
