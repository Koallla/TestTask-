import React, { Component } from 'react';
import UsersList from '../UserstList/UserstList';
import Filter from '../Filter/Filter';
import filterUsers from '../FilterUsers/filterUsers';
import fetchUsers from '../../API/Api';
import styles from './app.module.css';

export default class App extends Component {
  state = {
    users: [],
    filterName: '',
    filterLastName: '',
    filterAge: '',
    gender: null,
  };

  componentDidMount() {
    fetchUsers()
      .then(workersData => this.setState({ users: workersData }))
      .catch(error => {
        console.error(error);
      });
  }

  handleCheck = ({ target }) => {
    const { value } = target;
    const { gender } = this.state;

    this.setState({
      gender: gender !== value ? value : null,
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { users, filterName, filterLastName, filterAge, gender } = this.state;

    const filteredUsers = filterUsers(
      users,
      filterName,
      filterLastName,
      filterAge,
      gender,
    );

    return (
      <div className={styles.container}>
        <Filter
          value={(filterName, filterLastName, filterAge)}
          onChange={this.handleChange}
          onCheck={this.handleCheck}
          gender={gender}
        />
        <UsersList users={filteredUsers} />
      </div>
    );
  }
}
