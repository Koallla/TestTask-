import React from 'react';
import T from 'prop-types';
import styles from './filter.module.css';

const Filter = ({
  filterName,
  filterLastName,
  filterAge,
  filterSex,
  onChange,
  onChecked,

}) => (
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
          type="checkbox"
          name="m"
          id="Man"
          value={filterSex}
          onChange={onChecked}
        />
        М
      </label>

      {/* <label htmlFor="Women">
        <input
          type="checkbox"
          name="Women"
          // value={filterSex}
          // eslint-disable-next-line no-restricted-globals
          onChange={onChange}
        />
        Ж
      </label> */}
    </div>
  </div>
);

Filter.propTypes = {
  filterName: T.string,
  filterLastName: T.string,
  filterAge: T.string,
  filterSex: T.string,
  onChange: T.func,
  onChecked: T.func,
};

export default Filter;
