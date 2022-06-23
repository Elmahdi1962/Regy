import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from '../features/tables/tablesSlice';
import rowsReducer from '../features/rows/rowsSlice';
import selectionReducer from '../features/selection/selectionSlice';

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    rows: rowsReducer,
    selections: selectionReducer
  },
});
