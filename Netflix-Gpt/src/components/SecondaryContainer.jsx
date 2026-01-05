import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  } = useSelector((store) => store.movies);

  return (
    <div className="bg-black pb-6 md:pb-10">
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Popular on Netflix" movies={popularMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};


export default SecondaryContainer;
