import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requests";
import { FaPlay } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.getPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="relative h-[600px] w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black"></div>
      <img
        className="h-full w-full object-cover"
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-[30%] sm:top-[40%] left-5">
        <h1 className="font-bold text-[2.4rem] sm:text-[3rem]">
          {movie?.title}
        </h1>
        <div className="flex my-3">
          <button className="flex items-center bg-white text-black p-1 mr-2">
            <span className="mr-1">
              <FaPlay />
            </span>
            Play
          </button>
          <button className="border-white border-[1px] p-1">Watch Later</button>
        </div>
        <p>
          Released <span>{movie?.release_date}</span>
        </p>
        <p className="w-[50%]">{movie?.overview.slice(0, 150)}...</p>
      </div>
    </div>
  );
};

export default Main;
