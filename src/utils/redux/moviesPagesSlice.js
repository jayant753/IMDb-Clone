import { createSlice } from "@reduxjs/toolkit";

const moviesPagesSlice = createSlice({
  name: "moviesPages",
  initialState: {
    items: [
      {
        upcomingPages: 0,
        nowPlayingPages: 0,
        popularPages: 0,
        topRatedPages: 0,
      },
    ],
  },
  reducers: {
    addMoviesPages: (state, action) => {
      if (state.items[0].hasOwnProperty(action.payload)) {
        state.items[0][action.payload] += 1;
      }
    },
  },
});

export const { addMoviesPages } = moviesPagesSlice.actions;

export default moviesPagesSlice.reducer;
