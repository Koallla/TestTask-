/* eslint-disable no-console */
import React, { Component } from 'react';
// import PNotify from 'pnotify/dist/es/PNotify';

import styles from './app.module.css';
// import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { filterContacts } from '../FilterContact/filterContact';
import { fetchUsers } from '../../API/Api';

export default class App extends Component {
  state = {
    contacts: [],
    filterName: '',
    filterLastName: '',
    filterAge: '',
  };

  componentDidMount() {
    // const savedContacts = localStorage.getItem('contacts');

    // if (savedContacts) {
    //   const parsedContacts = JSON.parse(savedContacts);
    //   this.setState({ contacts: parsedContacts });
    // }

    fetchUsers().then(contactsWorkers =>
      this.setState({ contacts: contactsWorkers }),
    );
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (prevState.contacts !== contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // addContact = contact => {
  //   const findContact = findToMatch(this.state.contacts, contact);
  //   if (contact.name) {
  //     // eslint-disable-next-line no-unused-expressions
  //     findContact
  //       ? PNotify.alert(`${findContact.name} is already in contacts`)
  //       : this.setState(prevState => ({
  //           contacts: [...prevState.contacts, contact],
  //         }));
  //   } else {
  //     PNotify.error({
  //       text: "'Input name!'",
  //     });
  //   }
  // };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  render() {
    const { contacts, filterName, filterLastName, filterAge } = this.state;

    console.log(contacts);

    const filteredContacts = filterContacts(
      contacts,
      filterName,
      filterLastName,
      filterAge,
    );

    return (
      <div className={styles.container}>
        {/* <ContactForm
          onChange={this.handleChange}
          onAddContact={this.addContact}
        /> */}

        <Filter
          value={(filterName, filterLastName, filterAge)}
          onChange={this.handleChange}
        />
        <ContactList
          contacts={filteredContacts}
          // contacts={contacts}
          // onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
