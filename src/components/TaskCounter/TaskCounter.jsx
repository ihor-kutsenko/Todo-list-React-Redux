import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  // const tasks = useSelector(state => state.tasks);
  const tasks = useSelector(getTasks);

  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>
        Active: <span className={css.active}> {count.active}</span>
      </p>
      <p className={css.text}>
        Completed: <span className={css.completed}>{count.completed}</span>
      </p>
    </div>
  );
};
