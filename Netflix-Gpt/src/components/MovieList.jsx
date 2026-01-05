import { useRef } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);

  const handleWheel = (e) => {
    if (rowRef.current) {
      e.preventDefault();
      rowRef.current.scrollLeft += e.deltaY;
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h1 className="text-white text-xl font-semibold py-4">
        {title}
      </h1>

      <div
        ref={rowRef}
        onWheel={handleWheel}
        className="flex flex-nowrap gap-3 md:gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;