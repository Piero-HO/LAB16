import { useParams } from "react-router-dom";

import PageContainer from "@/components/layout/page-container";
import { useMovieDetail } from "@/hooks/use-movie-detail";
import { TMDB_IMAGE_BASE_URL } from "@/lib/tmdb";

export function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const id = Number(movieId);

  const { data: movie, isLoading, isError } = useMovieDetail(id);

  if (isLoading) {
    return (
      <PageContainer>
        <p className="py-16 text-center text-muted-foreground">
          Loading movie...
        </p>
      </PageContainer>
    );
  }

  if (isError || !movie) {
    return (
      <PageContainer>
        <p className="py-16 text-center text-destructive">
          Could not load this movie.
        </p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <article className="grid gap-8 py-10 md:grid-cols-[300px_1fr]">
        {movie.poster_path && (
          <img
            src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="aspect-2/3 w-full rounded-lg object-cover"
          />
        )}

        <div>
          <h1 className="text-3xl font-bold">
            {movie.title}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {movie.release_date} · Rating {movie.vote_average.toFixed(1)}
          </p>

          <p className="mt-6 text-muted-foreground">
            {movie.overview}
          </p>
        </div>
      </article>
    </PageContainer>
  );
}
