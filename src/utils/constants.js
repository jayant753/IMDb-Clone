import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";
import featured3 from "../assets/featured3.jpg";
import featured4 from "../assets/featured4.jpg";
import featured5 from "../assets/featured5.jpg";
import featured6 from "../assets/featured6.jpg";
import featured7 from "../assets/featured7.jpg";
import featured8 from "../assets/featured8.jpg";
import featured9 from "../assets/featured9.jpg";
import featured10 from "../assets/featured10.jpg";
import featured11 from "../assets/featured11.jpg";
import featured12 from "../assets/featured12.jpg";

import { addUpcomingMovies } from "./redux/upcomingMoviesSlice";
import { addNowPlayingMovies } from "./redux/nowPlayingMoviesSlice";
import { addTopRatedMovies } from "./redux/topRatedMoviesSlice";
import { addPopularMovies } from "./redux/popularMoviesSlice";
import { addMoviesPages } from "./redux/moviesPagesSlice";

const imagePath = "https://image.tmdb.org/t/p/original";

const trailer = [];

const allFeatured = [
  {
    id: 1,
    image: featured1,
    title: "Born This Month: Indian Stars With May Birthdays",
    description: "See the list",
    icon: "list",
  },
  {
    id: 2,
    image: featured2,
    title: "IMDb's 2024 Summer Watch Guide",
    description: "See the list",
    icon: "list",
  },
  {
    id: 3,
    image: featured3,
    title: "TV Tracker: Renewed and Canceled Shows",
    description: "Check the status",
    icon: "list",
  },
  {
    id: 4,
    image: featured4,
    title: `5 Movies to Watch While Gearing Up for 'Furiosa'`,
    description: "See the list",
    icon: "list",
  },
  {
    id: 5,
    image: featured5,
    title: "Roger Corman's 10 Highest-Rated Films",
    description: "See the list",
    icon: "list",
  },
  {
    id: 6,
    image: featured6,
    title: `What to Watch After "Baby Reindeer"`,
    description: "See our recommendations",
    icon: "list",
  },
  {
    id: 7,
    image: featured7,
    title: "IMDb's Asian and Pacific American Heritage Watchlist",
    description: "See the list",
    icon: "list",
  },
  {
    id: 8,
    image: featured8,
    title: "Staff Picks: What to Watch in May",
    description: "See our picks",
    icon: "list",
  },
  {
    id: 9,
    image: featured9,
    title: "The Latest TV & Movie Posters",
    description: "See more posters",
    icon: "photos",
  },
  {
    id: 10,
    image: featured10,
    title: `'Superman' First Look and More New Stills`,
    description: "See more skills",
    icon: "photos",
  },
];

const moviePageBtns = [
  {
    id: 1,
    btn: "UPCOMING",
    value: "upcoming",
    path: "upcoming",
    addMovies: addUpcomingMovies,
    addPages: addMoviesPages,
  },
  {
    id: 2,
    btn: "NOW PLAYING",
    value: "nowPlaying",
    path: "now_playing",
    addMovies: addNowPlayingMovies,
    addPages: addMoviesPages,
  },
  {
    id: 3,
    btn: "TOP RATED",
    value: "topRated",
    path: "top_rated",
    addMovies: addTopRatedMovies,
    addPages: addMoviesPages,
  },
  {
    id: 4,
    btn: "POPULAR",
    value: "popular",
    path: "popular",
    addMovies: addPopularMovies,
    addPages: addMoviesPages,
  },
];

export { imagePath, allFeatured, moviePageBtns };
