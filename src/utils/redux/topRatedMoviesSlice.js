import { createSlice } from "@reduxjs/toolkit";

const topRatedMoviesSlice = createSlice({
  name: "topRatedMovies",
  initialState: {
    items: [],
  },

  reducers: {
    addTopRatedMovies: (state, action) => {
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

export const { addTopRatedMovies } = topRatedMoviesSlice.actions;

export default topRatedMoviesSlice.reducer;
