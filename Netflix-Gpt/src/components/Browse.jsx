import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();     // 👈 MISSING BEFORE
  useUpcomingMovies();     // 👈 MISSING BEFORE

  return (
    <div className="bg-black">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
