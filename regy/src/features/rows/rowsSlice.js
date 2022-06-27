import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {};

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    addRow: (state, action) => {
      const id = nanoid();
      state[id] = {...action.payload, id};
    },
    removeRow: (state, action) => {
      delete state[action.payload.id];
    }
  }
});

export const selectRows = (tableId) => (state) => tableId ? Object.values(state.rows).filter((row) => row.tableId === tableId) : null;
export const selectHeader = (tableId) => (state) => tableId ? state.tables[tableId].columns : null;

export const { addRow, removeRow } = rowsSlice.actions;

export default rowsSlice.reducer;
