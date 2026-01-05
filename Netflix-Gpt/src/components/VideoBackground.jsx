import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const movieId = movies?.[0]?.id;

  useEffect(() => {
    const getMovieVideo = async () => {
      if (!movieId) return;

      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      const json = await data.json();
      const trailer = json?.results?.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );

      dispatch(addTrailerVideo(trailer));
    };

    getMovieVideo();
  }, [movieId]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <iframe
        className="w-full h-full scale-125"
        src="https://www.youtube.com/embed/rZ_e-s6VvR4?autoplay=1&mute=1&controls=0&loop=1&playlist=rZ_e-s6VvR4"
        title="Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
