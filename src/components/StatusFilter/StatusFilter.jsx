import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { statusFilters } from 'redux/contans';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/actions';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  // const filter = useSelector(state => state.filters.status);
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};