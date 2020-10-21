/* eslint-disable no-console */
import React, { Component } from 'react';
// import PNotify from 'pnotify/dist/es/PNotify';

import styles from './app.module.css';
// import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import filterContacts from '../FilterContact/filterContact';
import fetchUsers from '../../API/Api';

export default class App extends Component {
  state = {
    contacts: [],
    filterName: '',
    filterLastName: '',
    filterAge: '',
    filterSex: '',
  };

  componentDidMount() {
    // async function fetchUsers() {
    //   try {
    //     const response = await axios.get('/user?ID=12345');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    fetchUsers().then(contactsWorkers =>
      this.setState({ contacts: contactsWorkers }),
    );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChecked = e => {
    const { filterSex } = this.state;
    console.log(filterSex);
    
    this.setState({ filterSex: e.target.name });
  };

  render() {
    const {
      contacts,
      filterName,
      filterLastName,
      filterAge,
      filterSex,
    } = this.state;

    console.log(contacts);

    const filteredContacts = filterContacts(
      contacts,
      filterName,
      filterLastName,
      filterAge,
      filterSex,
    );

    return (
      <div className={styles.container}>
        {/* <ContactForm
          onChange={this.handleChange}
          onAddContact={this.addContact}
        /> */}
        <Filter
          value={(filterName, filterLastName, filterAge, filterSex)}
          onChange={this.handleChange}
          onChecked={this.handleChecked}
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
