import { configureStore } from "@reduxjs/toolkit";
import nowPlayingSlice from "./nowPlayingSlice";
import popularSlice from "./popularSlice";
import topRatedSlice from "./topRatedSlice";
import upcomingSlice from "./upcomingSlice";

const store = configureStore({
  reducer: {
    upcoming: upcomingSlice,
    nowPlaying: nowPlayingSlice,
    popular: popularSlice,
    topRated: topRatedSlice,
  },
});

export default store;
