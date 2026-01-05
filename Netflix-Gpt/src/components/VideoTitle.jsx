import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 bottom-16 md:bottom-32 left-4 md:left-12 max-w-xs md:max-w-xl text-white">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
        {title}
      </h1>

      <p className="hidden md:block text-sm md:text-base opacity-90 mb-6">
        {overview}
      </p>

      <div className="flex gap-3">
        <button className="bg-white text-black px-4 md:px-6 py-2 rounded font-semibold text-sm md:text-base hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500/70 px-4 md:px-6 py-2 rounded font-semibold text-sm md:text-base">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;