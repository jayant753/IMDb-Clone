import { createSlice } from "@reduxjs/toolkit";

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    items: [],
  },

  reducers: {
    addPopular: (state, action) => {
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

export const { addPopular } = popularSlice.actions;

export default popularSlice.reducer;
