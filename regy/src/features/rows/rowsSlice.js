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
    },
    removeRowsOfTable: (state, action) => {
      const tableid = action.payload.tableId;
      const toDelete = [];
      Object.entries(state).map(([key, value]) => {
        if(value.tableId === tableid) {
          toDelete.push(key);
        }
        return value;
      });

      for(const k of toDelete) {
        delete state[k];
      }
    }
  }
});

export const selectRows = (tableId) => (state) => tableId ? Object.values(state.rows).filter((row) => row.tableId === tableId) : null;
export const selectHeader = (tableId) => (state) => tableId ? state.tables[tableId].columns : null;

export const { addRow, removeRow, removeRowsOfTable } = rowsSlice.actions;

export default rowsSlice.reducer;
