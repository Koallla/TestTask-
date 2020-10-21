const filterContacts = (
  contacts,
  filterName = '',
  filterLastName = '',
  filterAge = '',
  filterSex = '',
) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase()) &&
    contact.lastname.toLowerCase().includes(filterLastName.toLowerCase()) &&
    contact.age.toString().includes(filterAge) &&
    filterSex
      ? contact.sex === filterSex
      : contact,
  );
};
// const findToMatch = (contacts, contact) => {
//   return contacts.find(
//     element => element.name.toLowerCase() === contact.name.toLowerCase(),
//   );
// };

export default filterContacts;
