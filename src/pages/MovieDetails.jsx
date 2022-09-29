import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${"89b6a6ca030df829565babcb1da28013"}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [movieId]);
  console.log(movie);

  return (
    <div className="h-screen w-screen sm:flex pt-[60px] pb-[10px] px-10">
      {loading && (
        <h1 className="text-center font-bold text-[3rem]">Loading...</h1>
      )}
      <img
        className="h-[50vh] w-[100vw] object-cover"
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        alt={movie?.title}
      />
      <div className="md:ml-[50px] flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-center text-[2rem] sm:text-[3rem] ">
          {movie?.title}
        </h1>
        <p className="text-[1.2rem] my-[10px]">{movie?.release_date}</p>
        <p className="text-red-600 mb-[15px]">{movie?.vote_count} votes</p>
        <p className="text-center mb-3 sm:mb-0 text-[1.1rem] sm:text-[1.5rem]">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
