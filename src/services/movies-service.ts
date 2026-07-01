import { httpClient } from "@/services/http-client";
import type { Movie, TMDBPaginatedResponse } from "@/types/movie";

export async function getPopularMovies() {
  const { data } = await httpClient.get<TMDBPaginatedResponse<Movie>>(
    "/movie/popular",
    { params: { language: "es-ES" } },
  );

  return data.results;
}

export async function getMovieById(id: number) {
  const { data } = await httpClient.get<Movie>(`/movie/${id}`, {
    params: { language: "es-ES" },
  });

  return data;
}
