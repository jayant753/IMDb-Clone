import { configureStore } from "@reduxjs/toolkit";
import nowPlayingMoviesSlice from "./nowPlayingMoviesSlice";
import popularMoviesSlice from "./popularMoviesSlice";
import topRatedMoviesSlice from "./topRatedMoviesSlice";
import upcomingMoviesSlice from "./upcomingMoviesSlice";
import moviesPagesSlice from "./moviesPagesSlice";

const store = configureStore({
  reducer: {
    moviesPages: moviesPagesSlice,
    upcomingMovies: upcomingMoviesSlice,
    nowPlayingMovies: nowPlayingMoviesSlice,
    popularMovies: popularMoviesSlice,
    topRatedMovies: topRatedMoviesSlice,
  },
});

export default store;
