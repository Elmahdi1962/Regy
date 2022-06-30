import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from '../features/tables/tablesSlice';
import rowsReducer from '../features/rows/rowsSlice';
import selectionReducer from '../features/selection/selectionSlice';

const initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};
const storageSaver = store => next => action => {
  next(action);
  localStorage.setItem('state', JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    rows: rowsReducer,
    selections: selectionReducer
  },
  preloadedState: initialState,
  middleware: [storageSaver]
});
