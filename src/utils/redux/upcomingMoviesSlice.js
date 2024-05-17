import { createSlice } from "@reduxjs/toolkit";

const upcomingMoviesSlice = createSlice({
  name: "upcomingMovies",
  initialState: {
    items: [],
  },

  reducers: {
    addUpcomingMovies: (state, action) => {
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

export const { addUpcomingMovies } = upcomingMoviesSlice.actions;

export default upcomingMoviesSlice.reducer;
