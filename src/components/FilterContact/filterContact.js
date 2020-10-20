const filterContacts = (
  contacts,
  filterName = '',
  filterLastName = '',
  filterAge = '',
) => {
  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase()) &&
      contact.lastname.toLowerCase().includes(filterLastName.toLowerCase()) &&
      contact.age.toString().includes(filterAge),
  );
};
const findToMatch = (contacts, contact) => {
  return contacts.find(
    element => element.name.toLowerCase() === contact.name.toLowerCase(),
  );
};

export { filterContacts, findToMatch };
