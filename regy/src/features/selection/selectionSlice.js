import { createSlice } from '@reduxjs/toolkit';

const initialState = {selectedTableId: null};

export const selectionSlice = createSlice({
  name: 'selections',
  initialState,
  reducers: {
    selectTable: (state, action) => {
      state.selectedTableId = action.payload.id;
    }
  }
});
export const selectSelectedTableId = (state) => state.selections.selectedTableId;
export const { selectTable } = selectionSlice.actions;

export default selectionSlice.reducer;
