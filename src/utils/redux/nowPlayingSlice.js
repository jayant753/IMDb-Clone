import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: {
    items: [],
  },

  reducers: {
    addNowPlaying: (state, action) => {
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

export const { addNowPlaying } = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
