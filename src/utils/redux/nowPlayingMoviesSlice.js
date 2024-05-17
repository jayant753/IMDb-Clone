import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    items: [],
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
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

export const { addNowPlayingMovies } = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;
