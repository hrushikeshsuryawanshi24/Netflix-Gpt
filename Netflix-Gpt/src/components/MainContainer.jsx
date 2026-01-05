import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  return (
    <div className="relative h-[70vh] md:h-[85vh] lg:h-[90vh] bg-black overflow-hidden">
      {/* Video */}
      <VideoBackground />

      {/* Gradient Fade (THIS IS THE MAGIC) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Text Content */}
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;