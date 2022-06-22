import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

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

export const selectRows = (state) => state.rows;

export const { add, remove } = rowsSlice.actions;

export default rowsSlice.reducer;
