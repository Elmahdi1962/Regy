import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {};

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addTable: (state, action) => {
      const id = nanoid();
      state[id] = {
                    id: id,
                    title: action.payload.title,
                    columns: action.payload.columns
                  };
    },
    removeTable: (state, action) => {
      delete state[action.payload.id];
    },
    renameTable: (state, action) => {
      state[action.payload.id] = {...state[action.payload.id], title: action.payload.title};
    }
  }
});

export const selectTables = (state) => state.tables;

export const { addTable, removeTable, renameTable } = tablesSlice.actions;

export default tablesSlice.reducer;
