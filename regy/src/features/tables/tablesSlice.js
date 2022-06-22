import { createSlice } from '@reduxjs/toolkit';

const initialState = {'1': {title: 'Courses', id: 1, columns: ['Name', 'Score', 'Level']},
'2': {title: 'Courses2', id: 2, columns: ['Name', 'Score', 'Level']},
'3': {title: 'Courses3', id: 3, columns: ['Name', 'Score', 'Level']}};

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    add: (state, action) => {
      state.tables[action.payload.id] = {id: action.payload.id, title: action.payload.title};
    },
    remove: (state, action) => {
      delete state.tables[action.payload.id];
    }
  }
});

export const selectTables = (state) => state.tables;

export const { add, remove } = tablesSlice.actions;

export default tablesSlice.reducer;
