import type { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    overview: "A journey beyond the stars.",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    vote_average: 8.4,
    release_date: "2014-11-05",
    genre_ids: [12, 18, 878],
  },
  {
    id: 2,
    title: "Dune",
    overview: "The future of Arrakis.",
    poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop_path: "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
    vote_average: 7.9,
    release_date: "2021-10-22",
    genre_ids: [12, 18, 878],
  },
  {
    id: 3,
    title: "Oppenheimer",
    overview: "The story behind the atomic age.",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    vote_average: 8.1,
    release_date: "2023-07-19",
    genre_ids: [18, 36],
  },
];
