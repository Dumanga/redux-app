import { createSlice } from '@reduxjs/toolkit';

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    colors: [],
    search: '', 
  },
  reducers: {
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setColors, setSearch } = colorsSlice.actions;
export default colorsSlice.reducer;
