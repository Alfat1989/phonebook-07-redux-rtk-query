import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../redux/store';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onInput = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <label>
      Filtered contacts
      <input type="text" value={filterValue} onInput={onInput} />
    </label>
  );
};

export default Filter;
