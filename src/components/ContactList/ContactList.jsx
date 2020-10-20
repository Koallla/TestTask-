import React from 'react';
import T from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './contactList.module.css';

const ContactList = ({ contacts }) =>
  contacts && (
    <table className={styles.text}>
      {contacts.map(({ name, lastname, age, sex }) => (
        <tbody key={uuidv4()}>
          <tr>
            {name} {lastname}
          </tr>
          <tr>
            <td>Возраст: {age}</td>
          </tr>
          <tr>
            <td>Пол: {sex === 'm' ? 'Мужчина' : 'Женщина'}</td>
          </tr>
        </tbody>
      ))}
    </table>

    // <ul className={styles.list}>
    //   {contacts.map(el => (
    //     <li className={styles.item} key={uuidv4()}>
    //       <p className={styles.text}>
    //         {el.name} {el.lastname}
    //       </p>
    //       <div className={styles.text}>Возраст: {el.age}</div>
    //       <div className={styles.text}>Пол: {el.sex}</div>
    //     </li>
    //   ))}
    // </ul>
  );

ContactList.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  contacts: T.arrayOf(T.shape({})).isRequired,
};

export default ContactList;
