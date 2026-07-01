import { useMemo, useState } from "react";

import PageContainer from "@/components/layout/page-container";
import MoviesList from "@/components/movies/movies-list";
import MoviesPageHeader from "@/components/movies/movies-page-header";
import MoviesSearch from "@/components/movies/movies-search";
import { usePopularMovies } from "@/hooks/use-popular-movies";

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: movies, isLoading, isError } = usePopularMovies();

  const filteredMovies = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return (movies ?? []).filter((movie) =>
      movie.title.toLowerCase().includes(normalizedSearchTerm),
    );
  }, [movies, searchTerm]);

  return (
    <PageContainer>
      <MoviesPageHeader />

      <MoviesSearch
        resultsCount={filteredMovies.length}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />

      {isLoading && (
        <p className="py-16 text-center text-muted-foreground">
          Loading movies...
        </p>
      )}

      {isError && (
        <p className="py-16 text-center text-destructive">
          Could not load movies. Please try again later.
        </p>
      )}

      {!isLoading && !isError && <MoviesList movies={filteredMovies} />}
    </PageContainer>
  );
};

export default MoviesPage;
