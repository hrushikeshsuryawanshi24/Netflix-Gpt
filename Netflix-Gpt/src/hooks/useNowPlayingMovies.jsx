import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_original_language=hi",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results); // movies array
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
