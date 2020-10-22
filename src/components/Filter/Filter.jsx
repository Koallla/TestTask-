/* eslint-disable react/require-default-props */
import React from 'react';
import T from 'prop-types';
import styles from './filter.module.css';

const Gender = {
  MALE: 'm',
  FEMALE: 'f',
};

const Filter = ({
  filterName,
  filterLastName,
  filterAge,
  onChange,
  onCheck,
  gender,
}) => {
  console.log('gender', gender);
  // console.log('filterName', filterName);
  // console.log('filterAge', filterAge);
  // console.log('onChange', onChange);

  return (
    <div>
      <p>Filter</p>
      <input
        className={styles.input_filter}
        type="text"
        value={filterName}
        name="filterName"
        placeholder="Sort by name ..."
        onChange={onChange}
      />
      <input
        className={styles.input_filter}
        type="text"
        value={filterLastName}
        name="filterLastName"
        placeholder="Sort by lastname ..."
        onChange={onChange}
      />
      <input
        className={styles.input_filter}
        type="text"
        value={filterAge}
        name="filterAge"
        placeholder="Sort by age ..."
        onChange={onChange}
      />
      <div>
        <span>Пол</span>
        <label htmlFor="Man">
          <input
            type="radio"
            name="gender"
            id="Man"
            checked={gender === Gender.MALE}
            value={Gender.MALE}
            onChange={onCheck}
          />
          М
        </label>

        <label htmlFor="Women">
          <input
            type="radio"
            name="gender"
            id="Women"
            checked={gender === Gender.FEMALE}
            value={Gender.FEMALE}
            onChange={onCheck}
          />
          Ж
        </label>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filterName: T.string,
  filterLastName: T.string,
  filterAge: T.string,
  gender: T.string,
  onChange: T.func,
  onCheck: T.func,
};

export default Filter;
