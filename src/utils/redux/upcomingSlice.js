import { createSlice } from "@reduxjs/toolkit";

const upcomingSlice = createSlice({
  name: "upcoming",
  initialState: {
    items: [],
  },

  reducers: {
    addUpcoming: (state, action) => {
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

export const { addUpcoming } = upcomingSlice.actions;

export default upcomingSlice.reducer;
