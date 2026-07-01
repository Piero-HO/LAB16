import { useQuery } from "@tanstack/react-query";

import { getPopularMovies } from "@/services/movies-service";

export function usePopularMovies() {
  return useQuery({
    queryKey: ["movies", "popular"],
    queryFn: getPopularMovies,
  });
}
