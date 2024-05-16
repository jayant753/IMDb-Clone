import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
  name: "topRated",
  initialState: {
    items: [],
  },

  reducers: {
    addTopRated: (state, action) => {
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

export const { addTopRated } = topRatedSlice.actions;

export default topRatedSlice.reducer;
