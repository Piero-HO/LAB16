import { Link } from "react-router-dom";

import type { Movie } from "@/types/movie";

import { TMDB_IMAGE_BASE_URL } from "@/lib/tmdb";

import {
  Badge,
} from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <article>
      <Card className="overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
              : undefined
          }
          alt={movie.title}
          className="aspect-2/3 w-full object-cover"
        />

        <CardHeader className="gap-3">
          <Badge
            variant="secondary"
            className="w-fit"
          >
            Rating {movie.vote_average.toFixed(1)}
          </Badge>

          <CardTitle>
            {movie.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
            {movie.overview}
          </p>

          <Link
            to={`/movies/${movie.id}`}
            className="
              text-sm
              font-medium
              text-blue-600
              hover:underline
            "
          >
            View details
          </Link>
        </CardContent>
      </Card>
    </article>
  );
};

export default MovieCard;
