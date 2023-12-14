import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
