import trailerbg1 from "../assets/trailer1bg.jpg";
import trailerdp1 from "../assets/trailer1dp.jpg";
import trailerdp2 from "../assets/trailer2dp.jpg";
import trailerbg2 from "../assets/trailer2bg.jpg";
import trailerdp3 from "../assets/trailer3dp.jpg";
import trailerbg3 from "../assets/trailer3bg.jpg";
import trailerdp4 from "../assets/trailer4dp.jpg";
import trailerbg4 from "../assets/trailer4bg.jpg";
import trailerdp5 from "../assets/trailer5dp.jpg";
import trailerbg5 from "../assets/trailer5bg.jpg";
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

import { addUpcoming } from "./redux/upcomingSlice";
import { addNowPlaying } from "./redux/nowPlayingSlice";
import { addTopRated } from "./redux/topRatedSlice";
import { addPopular } from "./redux/popularSlice";

const imagePath = "https://image.tmdb.org/t/p/original";

const trailer = [
  {
    id: 1,
    image: trailerdp1,
    bgImage: trailerbg1,
    title: `June Squibb is 'Thelma'`,
    description: "Watch the Trailer",
    duration: "2:02",
    likes: 22,
    hearts: 20,
  },
  {
    id: 2,
    image: trailerdp2,
    bgImage: trailerbg2,
    title: `'Despicable Me 4'`,
    description: "Watch the New Trailer",
    duration: "2:46",
    likes: 205,
    hearts: 187,
  },
  {
    id: 3,
    image: trailerdp3,
    bgImage: trailerbg3,
    title: `"The Boys" Are Back`,
    description: "Watch the Season 4 Trailer",
    duration: "1:01",
    likes: 463,
    hearts: 234,
  },
  {
    id: 4,
    image: trailerdp4,
    bgImage: trailerbg4,
    title: `"Doctor Who" Stars Answer Fan Questions`,
    description: "Q&A With Ncuti Gatwa and Millie Gibson",
    duration: "3:58",
    likes: 12,
    hearts: 25,
  },
  {
    id: 5,
    image: trailerdp5,
    bgImage: trailerbg5,
    title: `'Monkey Man' and a Broken Hand`,
    description: "How Dev Patel Directed With Only One Paw",
    duration: "2:59",
    likes: 28,
    hearts: 7,
  },
];

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
    addAction: addUpcoming,
  },
  {
    id: 2,
    btn: "NOW PLAYING",
    value: "nowPlaying",
    path: "now_playing",
    addAction: addNowPlaying,
  },
  {
    id: 3,
    btn: "TOP RATED",
    value: "topRated",
    path: "top_rated",
    addAction: addTopRated,
  },
  {
    id: 4,
    btn: "POPULAR",
    value: "popular",
    path: "popular",
    addAction: addPopular,
  },
];

const trailersPageMovies = [
  {
    id: 1,
    image: trailerdp3,
    description: "Season 4 Official Trailer",
    title: "The Boys",
    duration: "2.36",
    date: "July 26, 2019",
  },
  {
    id: 2,
    image: trailerdp1,
    description: "Official Trailer",
    title: "Themla",
    duration: "1.59",
    date: "August 14, 2023",
  },
  {
    id: 3,
    image: trailerdp2,
    description: "Official Trailer",
    title: "Despicable Me 2",
    duration: "2.23",
    date: "May 5, 2020",
  },
  {
    id: 4,
    image: trailerdp4,
    description: "Official Trailer",
    title: "Doctor Who",
    duration: "1.57",
    date: "December 26, 2023",
  },
  {
    id: 5,
    image: trailerdp3,
    description: "Season 4 Official Trailer",
    title: "The Boys",
    duration: "2.36",
    date: "July 26, 2019",
  },
  {
    id: 6,
    image: trailerdp1,
    description: "Official Trailer",
    title: "Themla",
    duration: "1.59",
    date: "August 14, 2023",
  },
  {
    id: 7,
    image: trailerdp2,
    description: "Official Trailer",
    title: "Despicable Me 2",
    duration: "2.23",
    date: "May 5, 2020",
  },
  {
    id: 8,
    image: trailerdp4,
    description: "Official Trailer",
    title: "Doctor Who",
    duration: "1.57",
    date: "December 26, 2023",
  },
  {
    id: 9,
    image: trailerdp3,
    description: "Season 4 Official Trailer",
    title: "The Boys",
    duration: "2.36",
    date: "July 26, 2019",
  },
  {
    id: 10,
    image: trailerdp1,
    description: "Official Trailer",
    title: "Themla",
    duration: "1.59",
    date: "August 14, 2023",
  },
  {
    id: 11,
    image: trailerdp2,
    description: "Official Trailer",
    title: "Despicable Me 2",
    duration: "2.23",
    date: "May 5, 2020",
  },
  {
    id: 12,
    image: trailerdp4,
    description: "Official Trailer",
    title: "Doctor Who",
    duration: "1.57",
    date: "December 26, 2023",
  },
  {
    id: 13,
    image: trailerdp3,
    description: "Season 4 Official Trailer",
    title: "The Boys",
    duration: "2.36",
    date: "July 26, 2019",
  },
  {
    id: 14,
    image: trailerdp1,
    description: "Official Trailer",
    title: "Themla",
    duration: "1.59",
    date: "August 14, 2023",
  },
  {
    id: 15,
    image: trailerdp2,
    description: "Official Trailer",
    title: "Despicable Me 2",
    duration: "2.23",
    date: "May 5, 2020",
  },
  {
    id: 16,
    image: trailerdp4,
    description: "Official Trailer",
    title: "Doctor Who",
    duration: "1.57",
    date: "December 26, 2023",
  },
];
export { imagePath, trailer, allFeatured, moviePageBtns, trailersPageMovies };
