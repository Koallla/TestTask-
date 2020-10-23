import React from 'react';
import T from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './usersList.module.css';

const UsersList = ({ users }) =>
  users && (
    <table className={styles.table}>
      {users.map(({ name, lastname, age, sex }) => (
        <tbody key={uuidv4()} className={styles.user}>
          <tr>
            <td>
              {name} {lastname}
            </td>
          </tr>
          <tr>
            <td>Возраст:{age}</td>
          </tr>
          <tr>
            <td>Пол:{sex === 'm' ? 'Мужчина' : 'Женщина'}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );

UsersList.propTypes = {
  users: T.arrayOf(T.shape({})).isRequired,
};

export default UsersList;
