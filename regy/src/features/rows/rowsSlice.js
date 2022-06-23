import { createSlice } from '@reduxjs/toolkit';

const initialState = {'1-1': {name:'hi', tableId: 1, id: '1-1'}};

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    add: (state, action) => {
      state.rows[action.payload.id] = {...action.payload};
    },
    remove: (state, action) => {
      delete state.rows[action.payload.id];
    }
  }
});

export const selectRows = (tableId) => (state) => tableId ? Object.values(state.rows).filter((row) => row.tableId === tableId) : null;
export const selectHeader = (tableId) => (state) => tableId ? state.tables[tableId].columns : null;

export const { add, remove } = rowsSlice.actions;

export default rowsSlice.reducer;
