const filterContacts = (
  contacts,
  filterName,
  filterLastName,
  filterAge,
  gender,
) => {
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase()) &&
      contact.lastname.toLowerCase().includes(filterLastName.toLowerCase()) &&
      contact.age.toString().includes(filterAge),
  );

  return filteredContacts.filter(contact =>
    gender ? contact.sex === gender : contact,
  );
};

export default filterContacts;
