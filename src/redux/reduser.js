import { combineReducers } from 'redux';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const reducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
