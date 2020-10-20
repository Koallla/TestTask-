import React from 'react';
import T from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ filterName, filterLastName, filterAge, onChange }) => (
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
  </div>
);

Filter.propTypes = {
  filterName: T.string.isRequired,
  filterLastName: T.string.isRequired,
  filterAge: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default Filter;
