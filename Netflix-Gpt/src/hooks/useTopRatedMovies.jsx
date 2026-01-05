import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/constant";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };

    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
