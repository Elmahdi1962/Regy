import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from '../features/tables/tablesSlice';
import rowsReducer from '../features/rows/rowsSlice';

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    rows: rowsReducer
  },
});
