export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

export interface TMDBPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
