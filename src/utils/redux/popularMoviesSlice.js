import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    items: [],
  },

  reducers: {
    addPopularMovies: (state, action) => {
      state.items.push(...action.payload);
    },
    // removeItem: (state, action) => {
    //   state.items.pop();
    // },

    // claerCart: (state, action) => {
    //   state.items = [];
    // },
  },
});

export const { addPopularMovies } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;
