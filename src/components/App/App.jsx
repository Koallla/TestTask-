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
    gender: null,
    // filterSexOn: false,
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

  handleCheck = ({ target }) => {
    const { value, checked } = target;
    // const { gender } = this.state;

    console.log('checked', checked);
    console.log('value', value);

    this.setState({ gender: value });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleChecked = e => {
  //   const { gender } = this.state;
  //   console.log(gender);

  //   this.setState({ gender: e.target.name });

  //   // this.setState(prevState => ({
  //   //   prevState.filterSex ? [...prevState.contacts, contact],
  //   // }));
  // };

  render() {
    const {
      contacts,
      filterName,
      filterLastName,
      filterAge,
      gender,
    } = this.state;

    const filteredContacts = filterContacts(
      contacts,
      filterName,
      filterLastName,
      filterAge,
      gender,
    );

    console.log('gender', gender);

    return (
      <div className={styles.container}>
        <Filter
          value={(filterName, filterLastName, filterAge)}
          onChange={this.handleChange}
          onCheck={this.handleCheck}
          gender={gender}
        />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
