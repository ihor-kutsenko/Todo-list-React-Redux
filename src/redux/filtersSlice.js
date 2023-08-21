import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './contans';

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
