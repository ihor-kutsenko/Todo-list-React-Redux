import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { statusFilters } from 'redux/contans';
import { getTasks, getStatusFilter } from 'redux/selectors';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  // const tasks = useSelector(state => state.tasks);
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  // const statusFilter = useSelector(state => state.filters.status);
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
