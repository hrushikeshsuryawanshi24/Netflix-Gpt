import React from "react";
import { IMG_CDN } from "./constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-28 md:w-36 lg:w-40 flex-shrink-0">
      <img
        className="rounded-md hover:scale-110 transition-transform duration-300"
        src={IMG_CDN + posterPath}
        alt="Movie card"
      />
    </div>
  );
};


export default MovieCard;