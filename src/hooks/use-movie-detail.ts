import { useQuery } from "@tanstack/react-query";

import { getMovieById } from "@/services/movies-service";

export function useMovieDetail(id: number) {
  return useQuery({
    queryKey: ["movies", "detail", id],
    queryFn: () => getMovieById(id),
    enabled: Number.isFinite(id),
  });
}
