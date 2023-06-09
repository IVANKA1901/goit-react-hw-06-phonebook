import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactFilterAction } from 'store/actions';
import { getFilter } from 'store/selectors';

export function Filter() {
  const [filter, setFilter] = useState('');

  // const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onInputChange = ({ target: { value } }) => {
    setFilter(value);
    dispatch(contactFilterAction(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onInputChange}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
